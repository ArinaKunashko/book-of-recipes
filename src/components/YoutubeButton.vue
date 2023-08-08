<template>
    <a :href='href' target='_blank'>
        <v-btn variant='outlined'>
            YouTube
        </v-btn>
    </a>
</template>


<script setup>
import { defineProps } from 'vue'

const props = defineProps(() => {
    String
})
</script>

<style scoped></style>
