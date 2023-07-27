<template>
    <div>
        <Meals :meals="meals" />
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Meals from "./Meals.vue";

const meals = computed(() => store.state.randomMeals);

onMounted(() => {
    store.dispatch("searchRandomMeals")
})

</script>

