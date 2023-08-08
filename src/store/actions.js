import axiosClient from '../axiosClient'
import { useStorage } from '@vueuse/core'


export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals)
    })
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setMealsByIngredients', data.meals)
    })
}

export function searchRandomMeals({ commit, state }) {
  const listRandomMeals = JSON.parse(JSON.stringify(state.randomMeals)).length
  if(listRandomMeals) return
  getRandomMelas()
  .then(function(values) {
    const mDataAll = [].concat(values[0].data.meals, values[1].data.meals, values[2].data.meals, values[3].data.meals, values[4].data.meals, values[5].data.meals, values[6].data.meals, values[7].data.meals, values[8].data.meals, values[9].data.meals)
    commit('setRandomMeals', mDataAll)
  })
}


function getRandomMelas() {
  var mData1 = axiosClient.get(`random.php`)
  var mData2 = axiosClient.get(`random.php`)
  var mData3 = axiosClient.get(`random.php`)
  var mData4 = axiosClient.get(`random.php`)
  var mData5 = axiosClient.get(`random.php`)
  var mData6 = axiosClient.get(`random.php`)
  var mData7 = axiosClient.get(`random.php`)
  var mData8 = axiosClient.get(`random.php`)
  var mData9 = axiosClient.get(`random.php`)
  var mData10 = axiosClient.get(`random.php`)

  return Promise.all([mData1, mData2, mData3, mData4, mData5, mData6, mData7, mData8, mData9, mData10])
}


export function searchFavoritesMeals({ commit }) {
  const favoriteMealsIds = useStorage('favoriteMeals', [])
  getFavoritesMeals(favoriteMealsIds.value)
  .then(function(values) {
    commit('setFavoritesMeals', values.map(e => e.data.meals).flat())
  })
}

function getFavoritesMeals(ids) {
  const favorites = []
  for (const mealId of ids) {
    const axiosResponse = axiosClient.get(`lookup.php?i=${mealId}`)
    favorites.push(axiosResponse)
  }
  return Promise.all(favorites)
}



