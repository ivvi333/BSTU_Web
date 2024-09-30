<script setup>
import { computed } from 'vue';
import { useMainStore } from "@/store";

const mainStore = useMainStore();
</script>

<template>
<header>
    <div class="header-content">
        <h1 class="brand"><router-link to="/"><img :src="'/img/logo.svg'">GameShop</router-link></h1>
        <nav class="menu">
            <ul>
                <li><h2 class="my-0"><router-link to="/catalog">Каталог</router-link></h2></li>
                <li><h2 class="my-0"><router-link to="/news">Новости</router-link></h2></li>
            </ul>
        </nav>
        <router-link to="/cart"><img :src="'/img/cart.svg'" style="width: 50px; height: 50px;">0</router-link>
        <router-link to="/login" v-if="mainStore.isAuth"><img :src="'/img/login.svg'" style="width: 50px; height: 50px;"></router-link>
        <router-link to="/logout" v-else><img :src="'/img/login.svg'" style="width: 50px; height: 50px;"></router-link>
    </div>
</header>
</template>

<style scoped>
.header-content {
    border-bottom: solid;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.header-content a {
    text-decoration: none;
    color: black;
    font-family: monospace;
}

.header-content img {
    vertical-align: bottom;
}

.brand {
    margin-block-start: 0;
    margin-block-end: 0;
}

.brand img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
    margin-right: 10px;
}

.menu {
    flex: 0.7 1 50%;
}

.menu ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu ul li {
    margin: 0.5em 0;
}
</style>