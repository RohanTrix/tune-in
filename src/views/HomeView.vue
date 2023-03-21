<script setup>
import { ref, computed } from 'vue';
import RecentCard from "@/components/cards/RecentCard.vue"
import MusicItemCard from "@/components/cards/MusicItemCard.vue"
const greet = () => {
    const hrs = new Date().getHours;
    if (hrs < 12) return 'morning'
    else if (hrs < 17) return 'afternoon'
    else return 'evening'
}

</script>

<template>
    <div id="HOME">
        <div class="px-8 py-4">
            <h1 class="text-white text-3xl font-medium">Good {{ greet() }}</h1>
        </div>
        <div id="RECENT" class="flex flex-wrap content-between min-h-[180px] items-center justify-between px-8">
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode" playlistId="12345"/>
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode" playlistId="12345"/>
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode" playlistId="12345"/>
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode" playlistId="12345"/>
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode" playlistId="12345"/>
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode" playlistId="12345"/>
        </div>
        <div class="px-8 py-4">
            <h2 class="text-white text-2xl font-medium">Made for you</h2>
        </div>
        <div class="flex px-8">
            <MusicItemCard />
        </div>
    </div>
</template>