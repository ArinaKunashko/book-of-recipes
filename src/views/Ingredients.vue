<template>
    <p class='text-h6 text-md-h5 text-lg-h4 d-flex flex-wrap justify-center ma-30'>Search Meals by Ingredients</p>
    <v-text-field v-model='keyword' label='Search for Ingredients' variant='solo' class='ma-10'>
    </v-text-field>
    <v-container class='bg-white mb-2'>
        <v-row class='d-flex flex-row flex-wrap justify-center' align='start' no-gutters>
            <div>
                <div class='cardItem__content'>
                    <a v-for='ingredient of computedIngredients' :key='ingredient.idIngredient' href='#'
                        class='block bg-white rounded p-3 mb-3 shadow' @click.prevent='openIngredient(ingredient)'>
                        <v-card class='mx-auto' max-width='300' variant='outlined'>
                            <v-card-item>
                                <v-card-title class='d-flex justify-center'> {{ ingredient.strIngredient }} </v-card-title>
                            </v-card-item>

                        </v-card>
                    </a>
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<script setup>

import { onMounted } from 'vue'
import axiosClient from '../axiosClient'
import { ref } from 'vue'
import { computed } from 'vue'
import store from '../store'
import { useRouter } from 'vue-router'

const router = useRouter()
const keyword = ref('')
const ingredients = ref([])

const computedIngredients = computed(() => {
    if (!computedIngredients.value) return ingredients
    return ingredients.value.filter((i) =>
        i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    )
})

onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})

function openIngredient(ingredient) {
    store.commit('setIngredient', ingredient)
    router.push({
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
    })
}
</script>

<style scoped>
@media (min-width: 415px) {
    .cardItem__content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

    }
}

@media (max-width: 414px) {
    .cardItem__content {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;

    }

}
</style>
