<template>
    <p class="text-h6 text-md-h5 text-lg-h4 d-flex flex-wrap justify-center ma-30">Random Meals</p>
    <div>
        <RundomMeals :meals="meals" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import RundomMeals from "../components/RandomMeals.vue";

const meals = computed(() => store.state.randomMeals);


</script>

