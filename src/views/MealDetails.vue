<template>
    <v-container class="bg-white mb-2">
        <v-row class="d-flex flex-row align-center justify-center" align="start" no-gutters>
            <v-card class="mx-auto" variant="outlined">
                <v-card-item>
                    <div class="cardItem__content">
                        <div>
                            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="ma-1 pa-1">
                        </div>
                        <div>
                            <v-card-title class="text-h6 text-md-h5 text-lg-h4  pa-1">{{ meal.strMeal }}</v-card-title>
                            <v-card-text class="ma-1 pa-1">
                                Category: {{ meal.strCategory }}
                            </v-card-text>
                            <v-card-text class="ma-1 pa-1">
                                Area: {{ meal.strArea }}
                            </v-card-text>
                            <v-card-text class="ma-1 pa-1">
                                <p class="font-weight-bold"> Ingredients </p>
                                <ul>
                                    <div v-for="(el, ind) of new Array(20)">
                                        <li v-if="meal[`strIngredient${ind + 1}`] && meal[`strMeasure${ind + 1}`]">
                                            {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }} - {{ meal[`strMeasure${ind
                                                +
                                                1}`]
                                            }}
                                        </li>
                                    </div>
                                </ul>
                            </v-card-text>
                            <v-card-text class="ma-1 pa-1">
                                <p class="font-weight-bold"> Instraction </p>
                                {{ meal.strInstructions }}
                            </v-card-text>
                            <v-card-actions class="d-flex justify-start">
                                <YoutubeButton :href="meal.strYoutube" />
                                <a :href="meal.strSource" target="_blank">
                                    <v-btn variant="outlined" class="ma-3">
                                        View Source
                                    </v-btn>
                                </a>
                                <v-btn variant="outlined" class="ma-3">
                                    <svg-icon type="mdi" :path="path"></svg-icon>
                                </v-btn>
                            </v-card-actions>

                        </div>
                    </div>

                </v-card-item>

            </v-card>
        </v-row>
    </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeartMultipleOutline } from '@mdi/js';


const meal = ref({})
const route = useRoute()
const path = ref(mdiHeartMultipleOutline);


onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0] || {}
        })
})



</script>

<style scoped>
@media (min-width: 415px) {
    img {
        max-width: 500px;
    }

    .cardItem__content {
        display: grid;
        grid-template-columns: repeat(2, 0.5fr);
    }
}




@media (max-width: 414px) {
    img {
        max-width: 100%;
    }

    .cardItem__content {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

}
</style>