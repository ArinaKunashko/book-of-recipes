<template>
        <v-tabs align-tabs="center" class="ma-10">
            <router-link :to="{ name: 'home' }">
                <v-tab :value="1">
                    Home
                </v-tab>
            </router-link>
            <router-link :to="{ name: 'byName' }">
                <v-tab :value="2">
                    Search Meals
                </v-tab>
            </router-link>


            <router-link :to="{ name: 'byLetter' }">
                <v-tab :value="3">
                    Meals By Letter
                </v-tab>
            </router-link>


            <router-link :to="{ name: 'ingredients' }">
                <v-tab :value="4">
                    Meals By Ingredients
                </v-tab>
            </router-link>

            <router-link :to="{ name: 'favorites' }">
                <v-tab :value="5">
                    Favorites
                </v-tab>
            </router-link>
        </v-tabs>
</template>

<script setup>

</script>

<style scoped> 

</style>