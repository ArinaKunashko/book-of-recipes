<template>
    <div>
        <MealsList :meals='meals' />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '../store'
import MealsList from './MealsList.vue'

const meals = computed(() => store.state.randomMeals)
store.dispatch('searchRandomMeals')



</script>

