<template>
    <div>
        <v-col>
            <v-sheet class="pa-2 ma-2">
                <v-card class="mx-auto" max-width="388" variant="outlined">
                    <v-card-item>
                        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
                            <v-card-title class="ma-1">{{ meal.strMeal }}</v-card-title>
                            <v-card-text class="ma-0 pa-1">
                                Category: {{ meal.strCategory }}
                            </v-card-text>
                        </router-link>

                    </v-card-item>
                    <v-card-actions class="mt-3">
                        <a :href="meal.strYoutube" target="_blank">
                            <v-btn variant="outlined" class="ma-3">
                                YouTube
                            </v-btn>
                        </a>
                        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                            <v-btn variant="outlined" class="ma-3">
                                View
                            </v-btn>
                        </router-link>
                        <div>
                            <v-btn variant="outlined" class="ma-3" @click="toggleFavorite(meal.idMeal)">
                                <v-icon>
                                    <svg-icon type="mdi"
                                        :path="favoriteMeals.includes(meal.idMeal) ? pathMdiHeartMultiple : pathMdiHeartMultipleOutline"></svg-icon>
                                </v-icon>
                            </v-btn>
                        </div>

                    </v-card-actions>
                </v-card>
            </v-sheet>
        </v-col>
    </div>
</template>

<script setup>
import { defineProps, ref, computed, defineEmits, watch } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeartMultipleOutline } from '@mdi/js';
import { mdiHeartMultiple } from '@mdi/js';
import { useStorage } from '@vueuse/core';

const favoriteMeals = useStorage('favoriteMeals', [])


const pathMdiHeartMultipleOutline = ref(mdiHeartMultipleOutline);
const pathMdiHeartMultiple = ref(mdiHeartMultiple)


const { meal, markAsFavorite } = defineProps({
    meal: {
        required: true,
        type: Object
    },

})

function toggleFavorite(id) {
    const favorites = favoriteMeals.value
    let newFavorites = []
    if (favorites.includes(id)) {
        newFavorites = favorites.filter(function (el) { return el !== id })
    } else {
        favorites.push(id)
        newFavorites = favorites
    }
    favoriteMeals.value = newFavorites
}


</script>


<style></style>