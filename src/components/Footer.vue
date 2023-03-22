<script setup>

import CurrentSongView from "@/views/CurrentSongView.vue"
import HeartOutline from "vue-material-design-icons/HeartOutline.vue"
import PictureInPictureBottomRight from "vue-material-design-icons/PictureInPictureBottomRight.vue"
</script>
<template>
    <footer class="fixed flex items-center bottom-0 h-[9%] z-50 w-full bg-[#181818] ">
        <div class="flex items-center w-full justify-between m-5 ">
            <div class="leftSection flex items-center">
                <CurrentSongView imgURL="https://picsum.photos/id/100/300/300" title="Hello" subtitle="Jonas Dude"/>
                <button class="text-gray-400 hover:text-white transition mr-3"><HeartOutline size="20" /></button>
                <button class="text-gray-400 hover:text-white transition"><PictureInPictureBottomRight size="20" /></button>
            </div>
            <div class="centerSection">
                
            </div>
            <div class="rightSection"></div>
        </div>
    </footer>
</template>