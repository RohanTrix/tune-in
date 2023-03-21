<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import MenuItem from "@/components/MenuItem.vue"
</script>

<template>
    <div id="SideNav" class="fixed p-6 h-[100%] w-[270px] z-50 bg-black">
        <RouterLink to="/" class="flex items-center">
            <img class="w-10 h-10 mr-2" src="/images/logo.png" alt="">
            <h1 class="text-white text-xl font-medium">Tune In!	</h1>
            <!-- <img class="mb-[18px]" width="125" src="/images/icons/spotify-logo.png" alt=""> -->
        </RouterLink>
        <menu class="mt-10">
            <RouterLink to="/">
                <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
            </RouterLink>
            <RouterLink to="/search">
                <MenuItem class="ml-[1px]" :iconSize="23" name="Search" iconString="search" pageUrl="/search" />
            </RouterLink>
            <RouterLink to="/library">
                <MenuItem class="ml-[1px]" :iconSize="23" name="Library" iconString="library" pageUrl="/library" />
            </RouterLink>
            <div class="pt-3.5">
                <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
                <MenuItem :iconSize="24" name="Liked Songs" iconString="liked" pageUrl="/liked" />
            </div>
        </menu>
        <div class="border-b border-b-gray-700 mt-0 mb-2"></div>
        <ul>
            <MenuItem class="left-0" :iconSize="24" name="My Playlist #1" iconString="" pageUrl="/playlist/1" />
            <MenuItem :iconSize="24" name="My Playlist #2" iconString="" pageUrl="/playlist/2" />
            <MenuItem :iconSize="24" name="My Playlist #3" iconString="" pageUrl="/playlist/3" />
        </ul>
    </div>
</template>