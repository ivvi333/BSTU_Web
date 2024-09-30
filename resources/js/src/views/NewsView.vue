<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

import ArticleCard from '@/components/news/ArticleCard.vue';

const newsArticles = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('/api/news-articles');
        newsArticles.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <div class="row mt-5">
        <div class="col-sm-12 col-lg-6" v-for="article in newsArticles" :key="article.id">
            <ArticleCard :article="article" />
        </div>
    </div>
</template>
