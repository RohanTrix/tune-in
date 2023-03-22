<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import uniqolor from 'uniqolor'
const randColor = ref('')
randColor.value = uniqolor.random().color

const props = defineProps({
    category: String,
    imgURL: String
})


</script>

<template>
    <RouterLink to="/library">
        <div v-if="randColor" :style="`background-color: ${randColor}`"
            class="relative contrast-[2] brightness-[0.87] rounded-xl aspect-square  overflow-hidden">
            <div class="text-white pt-4 pl-4 text-2xl font-medium">{{ category }}</div>
            <img :src="imgURL" class="absolute contrast-[0.55] -right-3.5 bottom-0 aspect-square max-w-[100px] rotate-[20deg]">
        </div>
    </RouterLink>
</template>