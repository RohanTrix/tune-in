<script setup>
import Play from "vue-material-design-icons/Play.vue"
import { ref, toRefs, watchEffect } from 'vue';
const props = defineProps({
    imgURL: String,
    title: String,
    playlistName: String
})

const { imgURL, title, playlistId } = toRefs(props)
const playButtonVisible = ref(false)
const togglePlayButtonVisibility = () => { playButtonVisible.value = !playButtonVisible.value }

</script>
<template>
    <button class="md:w-[500px] lg:w-[350px] xl:w-[450px] mb-2 mr-5 flex justify-between rounded-md items-start glass grow"
        @mouseenter="togglePlayButtonVisibility" @mouseleave="togglePlayButtonVisibility">
        <div class="flex justify-center items-center">
            <img class="rounded-sm mr-3" :width="80" :src="imgURL" alt="">
            <h3 class="text-white text-lg  font-semibold">{{ title }}</h3>

        </div>
        <button :class="playButtonVisible ? '' : 'invisible'"
            class="rounded-full bg-green-500 flex items-center justify-center w-12 h-12 m-4 shadow-lg">
            <Play fillColor="#000" :size="30" />
        </button>
    </button>
</template>

<style scoped>
.glass {
    background: rgba(255, 255, 255, 0.13);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    transition: background 0.3s ease;
}

.glass:hover {
    background: rgba(255, 255, 255, 0.2);
}
</style>
