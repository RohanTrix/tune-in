<script setup>
import RecentCard from "@/components/cards/RecentCard.vue"
import MusicItemCard from "@/components/cards/MusicItemCard.vue"
import { getRandImgUrl } from "../stores/useImgUrlGen";
const greet = () => {
    const hrs = new Date().getHours();
    if (hrs < 12) return 'morning'
    else if (hrs < 17) return 'afternoon'
    else return 'evening'
}

//Img gen

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
        <MusicItemCard v-for="n in 8" :key="n" :imgURL="getRandImgUrl()" title="Daily Mix 1"
            subtitle="Arijit Singh, Rebecca" />
    </div>

    <div class="px-8 py-4">
        <h2 class="text-white text-2xl font-medium">Made for you</h2>
    </div>
    <div class="flex content-between min-h-[120px] items-center justify-start px-8">
        <MusicItemCard v-for="n in 6" :key="n" :imgURL="getRandImgUrl()" title="Daily Mix 1"
            subtitle="Arijit Singh, Rebecca" />

    </div>
    <div class="px-8 py-4">
        <h2 class="text-white text-2xl font-medium">Jump Back In</h2>
    </div>
    <div class="flex content-between min-h-[180px] items-center justify-start px-8">
        <MusicItemCard v-for="n in 6" :key="n" :imgURL="getRandImgUrl()" title="Daily Mix 1"
            subtitle="Arijit Singh, Rebecca" />

    </div>
</template>