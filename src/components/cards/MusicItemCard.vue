<script setup>
import { ref, toRefs, watchEffect } from 'vue';

import Play from "vue-material-design-icons/Play.vue"

const props = defineProps({
    imgURL: String,
    title: String,
    subtitle: String
})


const { imgURL, title, subtitle } = toRefs(props)

const playButtonVisible = ref(false)
const togglePlayButtonVisibility = () => { playButtonVisible.value = !playButtonVisible.value }
</script>

<template>
    <RouterLink to="library">
        <div class="relative bg-[#111111] max-w-[200px] p-4 rounded-md mr-4 transition hover:bg-[#252525] cursor-pointer flex flex-col"
            @mouseenter="togglePlayButtonVisibility" @mouseleave="togglePlayButtonVisibility">

            <div class="relative">

                <img class="rounded-md" :src="imgURL">
                <button :class="playButtonVisible ? '' : 'invisible'"
                    class="absolute bottom-0.5  right-0.5  rounded-full bg-green-500 flex items-center justify-center w-12 h-12 m-4 shadow-lg">
                    <Play :size="30" />
                </button>
            </div>
            <div class="text-white pt-4 font-bold text-[17px]">{{ title }}</div>
            <div class="text-gray-400 pt-1 font-semibold text-[17px]">{{ subtitle }}</div>

        </div>
    </RouterLink></template>