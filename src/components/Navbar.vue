<template>
        <v-tabs v-model="tab"  align-tabs="center" class="ma-10">
            <router-link :to="{ name: 'home' }">
                <v-tab :value="1">
                    Home
                </v-tab>
            </router-link>
            <router-link :to="{ name: 'byName', params: { letter } }">
                <v-tab :value="2">
                    Search Meals
                </v-tab>
            </router-link>


            <router-link :to="{ name: 'byLetter', params: { letter } }">
                <v-tab :value="3">
                    Meals By Letter
                </v-tab>
            </router-link>


            <router-link :to="{ name: 'ingredients', params: { letter } }">
                <v-tab :value="4">
                    Meals By Ingredients
                </v-tab>
            </router-link>

            <router-link :to="{ name: 'favorites', params: { letter } }">
                <v-tab :value="5">
                    Favorites
                </v-tab>
            </router-link>
        </v-tabs>
</template>

<script setup>

</script>