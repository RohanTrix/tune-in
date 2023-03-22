<script setup>
import { ref, toRefs, watchEffect } from 'vue';
const props = defineProps({
    imgURL: String,
    title: String,
    subtitle: String
})


const { imgURL, title, subtitle } = toRefs(props)

</script>
<template>
    <div class="flex items-center h-full pr-6 ">
        <img class="rounded-sm mr-3" width="56" :src="imgURL" alt="">
        <section class="title flex flex-col justify-items-center">
            
            <div class="text-white font-semibold text-[14px] cursor-pointer hover:underline">{{ title }}</div>
            
            <div class="text-gray-400 pt-0.5 text-xs cursor-pointer hover:underline">{{ subtitle }}</div>
        </section>
    </div>
</template>
