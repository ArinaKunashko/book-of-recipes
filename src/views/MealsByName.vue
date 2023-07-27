<template>
    <div>
        <p class="text-h6 text-md-h5 text-lg-h4 d-flex flex-wrap justify-center ma-30">Search Meals by Name</p>
    </div>
    <v-text-field label="Search for Meals" variant="solo" @change="searchMeals" v-model.trim="keyword" class="ma-10 mb-0">
    </v-text-field>
    <Meals :meals="meals" />
    <v-row class="d-flex flex-row align-center justify-center ma-10" v-if="!meals.length && !keyword">
        <p class="text-h7 text-md-h6 text-lg-h5 d-flex flex-wrap justify-center ma-30"> Choose your meals </p>
    </v-row>
    <v-row class="d-flex flex-row align-center justify-center ma-10" v-if="!meals.length && keyword" align="start"
        no-gutters>
        <p class="text-h7 text-md-h6 text-lg-h5 d-flex flex-wrap justify-center ma-30"> Sorry, there are no meals, we
            reccomend </p>
        <RandomMeals :meals="meals" />
    </v-row>
</template>

<script setup>
import { computed, ref } from 'vue';
import store from '../store'
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import Meals from '../components/Meals.vue';
import RandomMeals from '../components/RandomMeals.vue';

const keyword = ref("")
const route = useRoute()
const meals = computed(() => store.state.searchedMeals)


function searchMeals() {
    if (keyword.value) {
        store.dispatch("searchMeals", keyword.value)
    } else {
        store.commit("setSearchedMeals", [])
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})


</script>

<style scoped></style>