<template>
    <p class='text-h6 text-md-h5 text-lg-h4 d-flex flex-wrap justify-center ma-30 mb-10'>Search Meals by Letter</p>
    <div class='d-flex flex-wrap justify-center ma-20'>
        <router-link v-for='letter of letters' :key='letter' :to='{ name: "byLetter", params: { letter } }'>
            <v-btn size='small' variant='text' class='font-weight-medium d-flex flex-row align-center justify-center mt-6'
                align='start'>
                {{ letter }}
            </v-btn>
        </router-link>
        <v-row v-if='!meals.length && !route.params.letter' class='d-flex flex-row align-center justify-center ma-10'
            align='start' no-gutters>
            <p class='text-h7 text-md-h6 text-lg-h5 d-flex flex-wrap justify-center ma-30'> Choose your
                letter </p>
        </v-row>
        <v-row v-if='!meals.length && route.params.letter' class='d-flex flex-row align-center justify-center ma-10'
            align='start' no-gutters>
            <p class='text-h7 text-md-h6 text-lg-h5 d-flex flex-wrap justify-center ma-30'> Sorry, there are no meals, we
                reccomend</p>
            <RandomMeals :meals='meals' />
        </v-row>
        <MealsList :meals='meals' @addToFavorites='addToFavorites' />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import store from '../store'
import MealsList from '../components/MealsList.vue'
import RandomMeals from '../components/RandomMeals.vue'


const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

</script>
