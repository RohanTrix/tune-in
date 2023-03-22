<script setup>
import RecentCard from "@/components/cards/RecentCard.vue"
import MusicItemCard from "@/components/cards/MusicItemCard.vue"
const greet = () => {
    const hrs = new Date().getHours();
    console.log(hrs)
    if (hrs < 12) return 'morning'
    else if (hrs < 17) return 'afternoon'
    else return 'evening'
}
</script>

<template>
    <div>
        <div class="px-8 py-4">
            <h1 class="text-white text-3xl font-medium">Good {{ greet() }}</h1>
        </div>
        <div class="flex flex-wrap content-evenly min-h-[180px] items-center justify-start pl-8">
            <RecentCard imgURL="https://picsum.photos/id/60/300/300" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://picsum.photos/id/61/300/300" title="Sleeping"
                playlistId="12345" />
            <RecentCard imgURL="https://picsum.photos/id/62/300/300" title="Work"
                playlistId="12345" />
            <RecentCard imgURL="https://picsum.photos/id/63/300/300" title="Grind Time"
                playlistId="12345" />
            <RecentCard imgURL="https://picsum.photos/id/64/300/300" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://picsum.photos/id/65/300/300" title="Coding Mode"
                playlistId="12345" />
        </div>
        <div class="px-8 py-4">
            <h2 class="text-white text-2xl font-medium">Your top mixes</h2>
        </div>
        <div class="flex content-between min-h-[120px] items-center justify-start px-8">
            <MusicItemCard imgURL="https://picsum.photos/id/100/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard imgURL="https://picsum.photos/id/200/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/300/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/400/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/500/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/600/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="lg:block hidden" imgURL="https://picsum.photos/id/700/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="xl:block hidden" imgURL="https://picsum.photos/id/800/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />

        </div>

        <div class="px-8 py-4">
            <h2 class="text-white text-2xl font-medium">Made for you</h2>
        </div>
        <div class="flex content-between min-h-[120px] items-center justify-start px-8">
            <MusicItemCard imgURL="https://picsum.photos/id/18/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard imgURL="https://picsum.photos/id/19/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/20/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/21/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/22/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/23/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="lg:block hidden" imgURL="https://picsum.photos/id/24/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="xl:block hidden" imgURL="https://picsum.photos/id/25/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />

        </div>
        <div class="px-8 py-4">
            <h2 class="text-white text-2xl font-medium">Jump Back In</h2>
        </div>
        <div class="flex content-between min-h-[180px] items-center justify-start px-8">
            <MusicItemCard imgURL="https://picsum.photos/id/100/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard imgURL="https://picsum.photos/id/200/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/300/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/400/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/500/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="md:block hidden" imgURL="https://picsum.photos/id/600/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="lg:block hidden" imgURL="https://picsum.photos/id/700/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />
            <MusicItemCard class="xl:block hidden" imgURL="https://picsum.photos/id/800/300/300" title="Daily Mix 1"
                subtitle="Arijit Singh, Rebecca" />

        </div>
    </div>
</template>