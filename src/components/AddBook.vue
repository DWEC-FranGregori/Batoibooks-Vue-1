<template>
    <form @click="addBook">
        <h1>Añadir libro</h1>
        <div>
            <input type="text" disabled v-model="id">
        </div>

        <Modules @getModule="order"></Modules>

        <div>
            <label>Editorial:</label>
            <input type="text" required v-model="publisher">
            <br>
        </div>

        <div>
            <label>Precio:</label>
            <input type="number" required min="0" pattern="^\d*(\.\d{0,2})?$" v-model="price">
            <br>
        </div>

        <div>
            <label for="pages">Páginas:</label>
            <input type="number" required min="0" v-model="pages">
            <br>
        </div>

        <div>
            <label>Estado:</label>
            <input type="radio" value="new" required v-model="status">new
            <input type="radio" value="good" v-model="status">good
            <input type="radio" value="bad" v-model="status">bad
        </div>

        <div>
            <label>Comentarios:</label>
            <textarea v-model="coments"></textarea>
        </div>

        <button type="submit">Añadir</button>
    </form>
</template>

<script setup>
import Modules from '@/components/Modules.vue'

import { ref } from 'vue';

let id, idModule, publisher, price, pages, status, coments = ref('')


const addBook = () => {
    const newBook = { id, idModule, publisher, price, pages, status, coments }
    console.log('Añadir libro')
    console.log(newBook)
}

const order = (module) => {
    idModule = module
}

</script>

<style></style>