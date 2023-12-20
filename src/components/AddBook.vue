<template>
    <form @submit.prevent="addBook">
        <h1>Añadir libro</h1>
        <div>
            <input type="text" disabled v-model="id">
        </div>

        <Modules @getModule="order"></Modules>

        <div>
            <label>Editorial</label>
            <input type="text" required v-model="publisher">
            <br>
        </div>

        <div>
            <label>Precio</label>
            <input type="number" required min="0" pattern="^\d*(\.\d{0,2})?$" v-model="price">
            <br>
        </div>

        <div>
            <label for="pages">Páginas</label>
            <input type="number" required min="0" v-model="pages">
            <br>
        </div>

        <div>
            <label>Estado</label>
            <input type="radio" value="new" v-model="status">new
            <input type="radio" value="good" v-model="status">good
            <input type="radio" value="bad" v-model="status">bad
        </div>

        <div>
            <label>Comentarios</label>
            <textarea v-model="coments"></textarea>
        </div>

        <button type="submit">Añadir</button>
    </form>
</template>

<script setup>
import BooksRepository from '@/repositories/BooksRepository';
import Modules from '@/components/Modules.vue'

import { ref } from 'vue';

let id, idModule, publisher, price, pages, status, coments = ref()

const addBook = async () => {
    let newBook = { id: id || null, idModule, publisher, price, pages, status, coments: coments.value || '' }
    newBook.idUser = 3
    newBook.soldDate = ""
    newBook.photo = ""
    const repository = new BooksRepository()
    try {
        await repository.addBook(newBook)
        id = ''
        idModule = ''
        publisher = ''
        price = ''
        pages = ''
        status = ''
        coments.value = ''
    } catch (error) {
        console.error(error)
    }
}

const order = (module) => {
    idModule = module
}

</script>

<style scoped lang="sass">
form
    margin: 4%
    background-color: #eeeeee
    border: 1px ridge

h1
    margin-bottom: 10%
    text-align: center

div
    margin: 3%

    label
        display: flex
        flex-direction: column

button
    margin: 3%
    border-radius: 15px
    padding: 0.6em 2em
    border-radius: 8px
    color: #fff
    background-color: lch(80.88% 72.5 144)
    font-size: 1.1em
    border: 0
    margin: 1em

    &:hover
        background-color: lch(60.88% 63.8 144)

</style>