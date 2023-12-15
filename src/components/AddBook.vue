<template>
    <form @click="addBook">
        <h1>Añadir libro</h1>
        <div>
            <input type="text" disabled v-model="id">
        </div>
        <div>
            <label>Módulo:</label>
            <select required v-model="idModule">
                <option value="">-Selecciona un módulo-</option>
                <option v-for="module in modules" :key="modules.code" :value="module.code"> {{ module.cliteral }}</option>
            </select>
            <br>
        </div>

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
import ModulesRepository from '@/repositories/ModulesRepository'
import { ref, onMounted } from 'vue';

let modules = ref([])
let id, idModule, publisher, price, pages, status, coments = ref('')

onMounted(async () => {
    const repository = new ModulesRepository()
    modules.value = await repository.getAllModules()
})

const addBook = () => {
    const newBook = { id, idModule, publisher, price, pages, status, coments }
    console.log(newBook)
}

</script>

<style></style>