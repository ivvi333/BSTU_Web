<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const newsArticle = ref();
const route = useRoute();

onMounted(async () => {
    try {
        const response = await axios.get(`/api/news-articles/${route.params.id}`);
        newsArticle.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <div class="row g-0 article-box" v-if="newsArticle">
        <div class="col-md-6 article-img">
            <img :src="'/img/placeholder.svg'" class="img-fluid d-block w-100">
        </div>
        <div class="col-md-6 p-3">
            <h1>{{ newsArticle.title }}</h1>
            {{ newsArticle.content }}
        </div>
    </div>
</template>

<style scoped>
.article-box {
    font-family: monospace;
    border-style: none solid solid solid;
}
.article-img {
    border-style: none none solid none;
}

@media screen and (min-width: 768px) {
    .article-img {
        border-style: none solid none none;
    }
}
</style>