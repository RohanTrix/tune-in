<script setup>
import { ref, toRefs, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps({
    iconString: String,
    iconSize: Number,
    pageUrl: String,
    name: String
})
const { iconString, iconSize, pageUrl, name } = toRefs(props)

const icon = ref(null)
const textIsHover = ref(false)

watchEffect(() => {
    if (route.path == pageUrl.value) {
        icon.value = iconString.value + '-active'
        textIsHover.value = true;
    }
    else {
        icon.value = iconString.value + '-inactive'
        textIsHover.value = false;
    }
})

const isHover = () => {
    if (icon.value === iconString.value + '-active') return
    if (icon.value === iconString.value + '-inactive') {
        icon.value = iconString.value + '-inactive-hover'
        textIsHover.value = true;
    } else {
        icon.value = iconString.value + '-inactive'
        textIsHover.value = false;
    }
}
const extraStyle = () => {
    const s1 = textIsHover.value ? 'text-white' : 'text-gray-400'
    const s2 = iconString.value === '' ? '' : 'ml-4'
    return s1+' '+s2
}
</script>
<template>
    <li class="flex items-start justify-start pb-4 cursor-pointer" @mouseenter="isHover()" @mouseleave="isHover()">
        <img v-if="iconString !== ''" :width="iconSize" :src="`/images/icons/${icon}.png`"
            class="transition duration-500 ease-in-out">
        <div :class="extraStyle()" class="font-semibold text-[14px] mt-0.5 transition duration-500 ease-in-out hover:text-white">
            <span :class="route.path === pageUrl ? 'text-white' : ''">{{ name }}</span>
        </div>
    </li>
</template>