<script setup>
import { ref, onMounted } from 'vue'
import SideNav from "@/components/SideNav.vue"
import TopBar from "@/components/Topbar.vue"
import MainContentView from "@/views/MainContentView.vue"
</script>


<template>
    <TopBar />
    <SideNav />
    <MainContentView />
</template>

