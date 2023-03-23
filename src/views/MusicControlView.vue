<script setup>
import ProgressBar from 'primevue/progressbar';
import Slider from 'primevue/slider';

import ShuffleVariant from "vue-material-design-icons/ShuffleVariant.vue"
import PlayCircle from "vue-material-design-icons/PlayCircle.vue"
import PauseCircle from "vue-material-design-icons/PauseCircle.vue"
import Rewind from "vue-material-design-icons/Rewind.vue"
import FastForward from "vue-material-design-icons/FastForward.vue"
import Repeat from "vue-material-design-icons/Repeat.vue"

import { ref } from 'vue';

const progressVal = ref(50)

const isProgressBarHover = ref(false)
const toggleProgressBarHover = () => isProgressBarHover.value = !isProgressBarHover.value;


const isPlaying = ref(false)
</script>

<template>
  <div class="text-green-700 flex flex-col items-center">
    <section class="flex justify-around w-[50%] text-white">
      <button class="text-gray-400 hover:text-white transition mr-3">
        <ShuffleVariant :size="28" />
      </button>
      <button class="text-gray-400 hover:text-white transition mr-3">
        <Rewind :size="30" />
      </button>
      <div class="playpause relative">

        <button v-if="!isPlaying" class="text-white transition mt-2 mr-3" @click="isPlaying = !isPlaying">
          <PlayCircle :size="34" />
        </button>
        <button v-else class="text-white transition mt-2 mr-3" @click="isPlaying = !isPlaying">
          <PauseCircle :size="34" />
        </button>

      </div>
      <button class="text-gray-400 hover:text-white transition mr-3">
        <FastForward :size="30" />
      </button>
      <button class="text-gray-400 hover:text-white transition mr-3">
        <Repeat :size="28" />
      </button>
    </section>
    <div @mouseenter="toggleProgressBarHover" @mouseleave="toggleProgressBarHover" class="pt-1 pb-3">
      <ProgressBar v-if="!isProgressBarHover" :showValue="false" :value="progressVal" class="mt-1 rounded-full"
        style="width: 30rem;"></ProgressBar>
      <Slider v-else v-model="progressVal" style="width: 30rem;" class="mt-1 rounded-full" />
    </div>
  </div>
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