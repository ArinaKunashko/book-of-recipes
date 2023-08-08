<template>
    <p class='text-h6 text-md-h5 text-lg-h4 d-flex flex-wrap justify-center ma-30'>My Favorites Recipe</p>
    <v-row v-if='meals.length' class='d-flex flex-row align-center justify-center ma-10' align='start' no-gutters>
        <MealsList :meals='meals' />
    </v-row>
    
    <v-row v-if='!meals.length' class='d-flex flex-row align-center justify-center ma-10' align='start' no-gutters>
        <p class='text-h7 text-md-h6 text-lg-h5 d-flex flex-wrap justify-center ma-30'> Add Your Favorites Recipe, We
            Reccomend </p>
        <RandomMeals :meals='meals' />
    </v-row>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import store from '../store'
import MealsList from '../components/MealsList.vue'
import RandomMeals from '../components/RandomMeals.vue'

const meals = computed(() => store.state.favoriteMeals)

onMounted(() => {
    store.dispatch('searchFavoritesMeals')
})

</script>
