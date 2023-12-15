<template>
  <div>
    <Menu></Menu>
    <Messages></Messages>
    <BooksList></BooksList>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Messages from '@/components/Messages.vue'
import BooksList from '@/components/BooksList.vue'
</script>

<style scoped lang="sass">
div
  margin: 0px
</style>
