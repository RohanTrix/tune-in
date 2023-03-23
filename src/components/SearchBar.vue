<script setup>
import Magnify from "vue-material-design-icons/Magnify.vue"
import { useFocus } from '@vueuse/core'
import { ref } from "vue";
const target = ref()
useFocus(target, { initialValue: true })


</script>

<template>
    <div class="bg-white flex items-center text-black rounded-full py-1 pl-1 w-80">
        <Magnify :size="32" />
        <input ref="target" type="text" placeholder="What do you want to listen to?"
            class=" overflow-hidden bg-white w-[100%] mx-2 border-none focus:outline-none text-sm">
    </div>
</template>