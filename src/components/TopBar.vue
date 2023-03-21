<script setup>
import { ref } from 'vue'
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue"
import ChevronRight from "vue-material-design-icons/ChevronRight.vue"
import MenuDown from "vue-material-design-icons/MenuDown.vue"
import MenuUp from "vue-material-design-icons/MenuUp.vue"
const openMenu = ref(false)
</script>

<template>
    <div id="TopBar"
        class="w-[calc(100%-270px)] h-[60px] fixed right-0 z-20 bg-none bg-opacity-50 flex items-center justify-between">
        <div class="flex items-center ml-6">
            <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
                <ChevronLeft fillColor="#FFF" :size="30" />
            </button>
            <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer ml-4">
                <ChevronRight fillColor="#FFF" :size="30" />
            </button>
        </div>
        <button @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
            class="rounded-full bg-black hover:bg-[#282828] p-1 mr-8 mt-0.5 cursor-pointer">
            <div class="flex justify-start items-center">
                <img class="rounded-full" width="30"
                    src="https://media.licdn.com/dms/image/D4D03AQFKLXch3zKJCA/profile-displayphoto-shrink_800_800/0/1678628334067?e=1684972800&v=beta&t=MO83vkeW0lCLY9Slm718yA7tUwTRwOyapWxO2Qnm3IM"
                    alt="">
                <div class="text-white text-[14px] font-semibold px-3">Rohan Sirohia</div>
                <MenuDown v-if="!openMenu" @click="openMenu = true" fillColor="#FFFFFF" :size="25" />
                <MenuUp v-else @click="openMenu = false" fillColor="#FFFFFF" :size="25" />
            </div>
        </button>
        <span v-if="openMenu"
            class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer">
            <ul class="text-gray-200 font-semibold text-[14px]">
                <li class="px-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">Profile</li>
                <li class="px-3 py-2.5 hover:bg-[#3E3D3D]">Log Out</li>
            </ul>
        </span>
    </div>
</template>
