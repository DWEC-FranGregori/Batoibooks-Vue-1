<template>
    <div>
        <label>Módulo</label>
        <select required v-model="code" @change="order">
            <option disabled value="">Please Select</option>
            <option v-for="module in modules" :key="modules.code" :value="module.code"> {{
                module.cliteral }}
            </option>
        </select>
        <br>
    </div>
</template>

<script setup>
import ModulesRepository from '@/repositories/ModulesRepository'
import { onMounted, ref } from 'vue';

const emits = defineEmits(['getModule'])

let modules = ref([])
let code = ref()

onMounted(async () => {
    const repository = new ModulesRepository()
    modules.value = await repository.getAllModules()
})

const order = (event) => {
    code.value = event.target.value
    emits('getModule', code.value)
    console.log(`MODULES -> ${code.value}`)
}
</script>

<style scoped lang="sass">
label 
    display: flex 
    flex-direction: column
</style>