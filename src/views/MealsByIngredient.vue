<template>
    <div class="d-flex justify-center">
        <p class="text-h6 text-md-h5 text-lg-h4">Meals for {{ ingredient.strIngredient }}</p>
    </div>
    <Meals :meals="meals" @addToFavorites="addToFavorites" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const meals = computed(() => store.state.mealsByIngredient)
const route = useRoute()
const ingredient = computed(() => store.state.ingredient)

onMounted(() => {
    store.dispatch("searchMealsByIngredient", route.params.ingredient)
})

watch(route, () => {
    store.dispatch("searchMealsByIngredient", route.params.ingredient)

})

</script>