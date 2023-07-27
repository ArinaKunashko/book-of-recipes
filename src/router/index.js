import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import MealsByLetter from "../views/MealsByLetter.vue"
import MealsByName from "../views/MealsByName.vue"
import Ingredients from "../views/Ingredients.vue"
import MealDetails from "../views/MealDetails.vue"
import Favorites from "../views/Favorites.vue"
import MealsByIngredient from "../views/MealsByIngredient.vue"
import DefaulLayout from "../components/DefaulLayout.vue"



const routes = [
    {
        path: "/",
        component: DefaulLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home
            },
            {
                path: "/leetter/:letter?",
                name: "byLetter",
                component: MealsByLetter
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: MealsByName
            },
            {
                path: "/favorites",
                name: "favorites",
                component: Favorites
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredient
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredients
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }

        ]
    },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router