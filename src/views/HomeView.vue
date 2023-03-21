<script setup>
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
    <div>
        <div class="px-8 py-4">
            <h1 class="text-white text-3xl font-medium">Good {{ greet() }}</h1>
        </div>
        <div class="flex flex-wrap content-between min-h-[180px] items-center justify-start px-8">
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
                playlistId="12345" />
            <RecentCard imgURL="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" title="Coding Mode"
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