<script setup>
import { toRefs } from 'vue';



const props = defineProps({
    imgURL: String,
    title: String,
    subtitle: String
})

const { imgURL, title, subtitle } = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <div class="bg-[#111111] p-4 rounded-md m-2 hover:bg-[#252525] cursor-pointer"></div>
    </RouterLink>

</template>