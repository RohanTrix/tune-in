<script setup>
import { ref } from "vue"
import ProgressBar from 'primevue/progressbar';
import Slider from 'primevue/slider';
import CurrentSongView from "@/views/CurrentSongView.vue"
import MusicControlView from "@/views/MusicControlView.vue"
import HeartOutline from "vue-material-design-icons/HeartOutline.vue"
import TrayFull from "vue-material-design-icons/TrayFull.vue"
import SpeakerBluetooth from "vue-material-design-icons/SpeakerBluetooth.vue"
import PictureInPictureBottomRight from "vue-material-design-icons/PictureInPictureBottomRight.vue"
import VolumeHigh from "vue-material-design-icons/VolumeHigh.vue"

const volumeVal = ref(50)

const isVolumeBarHover = ref(false)
const toggleVolumeBarHover = () => isVolumeBarHover.value = !isVolumeBarHover.value;

</script>
<template>
    <footer class="fixed flex items-baseline bottom-0 h-[9%] z-50 w-full bg-[#181818] ">
        <div class="flex items-center w-full justify-between mx-5 my-3">
            <div class="leftSection flex items-center">
                <CurrentSongView imgURL="https://picsum.photos/id/100/300/300" title="Hello" subtitle="Jonas Dude" />
                <button class="text-gray-400 hover:text-white transition mr-3">
                    <HeartOutline size="22" />
                </button>
                <button class="text-gray-400 hover:text-white transition">
                    <PictureInPictureBottomRight size="22" />
                </button>
            </div>
            <div class="centerSection mb-2">
                <MusicControlView />
            </div>
            <div class="rightSection flex">
                <button class="text-gray-400 hover:text-white transition mr-3">
                    <TrayFull size="22" />
                </button>
                <button class="text-gray-400 hover:text-white transition mr-3">
                    <SpeakerBluetooth size="22" />
                </button>
                <div class="flex items-center">

                    <button class="text-gray-400 hover:text-white transition mr-3 flex">
                        <VolumeHigh size="22" />
                    </button>
                    <div @mouseenter="toggleVolumeBarHover" @mouseleave="toggleVolumeBarHover">
                        <ProgressBar v-if="!isVolumeBarHover" :showValue="false" :value="volumeVal"
                            class="mt-1 rounded-full" style="width: 5rem;"></ProgressBar>
                        <Slider v-else v-model="volumeVal" style="width: 5rem;" class="mt-1 rounded-full" />
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>


<style scoped>
.p-progressbar-determinate {
  height: 5px;
  background: grey;
}

:deep(.p-progressbar-determinate .p-progressbar-value) {
  background-color: white;
}

.p-slider {
  background-color: rgb(202, 193, 193);
}

:deep(.p-slider .p-slider-range) {
  background-color: green;
}
:deep(.p-slider .p-slider-handle, .p-slider .p-slider-handle:hover, .p-slider .p-slider-handle:focus) {
  color: green;
  background-color: green;
}


</style>