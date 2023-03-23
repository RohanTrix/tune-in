<script setup>
import CategoryCard from "@/components/cards/CategoryCard.vue"

import { ref, onBeforeMount } from 'vue'
import useRandImgUrl from '@/stores/useImgUrlGen'
const {getRandImgUrl} = useRandImgUrl();


</script>
<template>
    <div class="px-8 py-4">
        <h1 class="text-white text-3xl font-medium">Browse all</h1>
    </div>
    <div class="grid xl:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 px-8 gap-6">
        <CategoryCard v-for="n in 35" :key="n" :imgURL="getRandImgUrl()" category="Podcasts" />

    </div>
</template>

