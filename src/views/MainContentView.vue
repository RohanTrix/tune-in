<template>
    <div id="MainContent" 
    class="
            fixed
            right-0
            top-0
            w-[calc(100%-270px)]
            h-full
            overflow-auto
            custom-bg-gradient">
            <div class="mt-[70px]"></div>
            <RouterView />
            <div class="mb-[100px]"></div>
            </div>
</template>

<script>

import {RouterView} from "vue-router"
</script>

<style scoped>
.custom-bg-gradient {
    background-image: linear-gradient(rgb(12, 110, 12) , black 40%);
}
</style>