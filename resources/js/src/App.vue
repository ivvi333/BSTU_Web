<script setup>
import Header from './components/app/Header.vue'
import Main from './components/app/Main.vue'

import { onMounted } from 'vue';
import { useMainStore } from "@/store";

const mainStore = useMainStore();

onMounted(() => {
    mainStore.setToken(mainStore.user);
})
</script>

<template>
    <Header></Header>
    <Main></Main>
</template>
