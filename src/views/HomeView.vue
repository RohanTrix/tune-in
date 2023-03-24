<script setup>
import RecentCard from "@/components/cards/RecentCard.vue"
import MusicItemCard from "@/components/cards/MusicItemCard.vue"
import { getRandImgUrl } from "../stores/useImgUrlGen";
import { useWindowSize } from '@vueuse/core'
const greet = () => {
    const hrs = new Date().getHours();
    if (hrs < 12) return 'morning'
    else if (hrs < 17) return 'afternoon'
    else return 'evening'
}

//Img gen

const { width, height } = useWindowSize()
const isVisible = (n) => {
    if(width.value < 1536 && n>=6) return false;
    if(width.value < 1280 && n>=5) return false;
    if(width.value < 1024 && n>=4) return false;
    if(width.value < 768  && n>=3) return false;
    return true;
}
</script>

<template>
    <div class="px-8 py-4">
        <h1 class="text-white text-3xl font-medium">Good {{ greet() }}</h1>
    </div>
    <div class="flex flex-wrap content-evenly min-h-[180px] items-center justify-start pl-8">
        <RecentCard v-for="n in 6" :key="n" :imgURL="getRandImgUrl()" title="Coding Mode" playlistId="12345" />
    </div>
    <div class="px-8 py-4">
        <h2 class="text-white text-2xl font-medium">Your top mixes</h2>
    </div>
    <div class="flex content-between min-h-[120px] items-center justify-start px-8">
        <MusicItemCard v-for="n in 8" v-show="isVisible(n)" :key="n" :imgURL="getRandImgUrl()" title="Daily Mix 1"
            subtitle="Arijit Singh, Rebecca" />
    </div>

    <div class="px-8 py-4">
        <h2 class="text-white text-2xl font-medium">Made for you</h2>
    </div>
    <div class="flex content-between min-h-[120px] items-center justify-start px-8">
        <MusicItemCard v-for="n in 8" v-show="isVisible(n)" :key="n" :imgURL="getRandImgUrl()" title="Daily Mix 1"
            subtitle="Arijit Singh, Rebecca" />

    </div>
    <div class="px-8 py-4">
        <h2 class="text-white text-2xl font-medium">Jump Back In</h2>
    </div>
    <div class="flex content-between min-h-[180px] items-center justify-start px-8">
        <MusicItemCard v-for="n in 8" v-show="isVisible(n)" :key="n" :imgURL="getRandImgUrl()" title="Daily Mix 1"
            subtitle="Arijit Singh, Rebecca" />

    </div>
</template>