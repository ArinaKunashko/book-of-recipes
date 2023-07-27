<template>
       <v-container class="bg-white mb-2">
        <v-row class="d-flex flex-row align-center justify-center" align="start" no-gutters>
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </v-row>
        
    </v-container>
</template>

<script setup>
import MealItem from './MealItem.vue';

import { defineProps } from 'vue';


const { meals, markAsFavorite } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
})



</script>