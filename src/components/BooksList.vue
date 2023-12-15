<template>
    <div class="row">
        <BookItem v-for="book in books" :key="book.id" :book="book" class="container"></BookItem>
    </div>
</template>

<script setup>
import BooksRepository from '@/repositories/BooksRepository.js'
import BookItem from '@/components/BookItem.vue'
import { ref, onMounted } from 'vue';

const repository = new BooksRepository()
let books = ref([])

onMounted(async () => {
    try {
        books.value = await repository.getAllBooks()
        console.log(books)
    } catch (error) {
        console.error(error)
    }
})
</script>

<style scoped lang="sass">
.container
    margin: 5%

</style>
