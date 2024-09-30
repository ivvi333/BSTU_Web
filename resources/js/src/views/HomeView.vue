<script setup>
import FeaturedProductCard from '@/components/catalog/FeaturedProductCard.vue';
import ProductCard from '@/components/catalog/ProductCard.vue';
import ArticleCard from '@/components/news/ArticleCard.vue';
import { ref } from 'vue';

const games = ref
([
    {
        id: 1,
        name: 'Игра №1',
        descr: 'Описание игры №1'
    },
    {
        id: 2,
        name: 'Игра №2',
        descr: 'Описание игры №2'
    },
    {
        id: 3,
        name: 'Игра №3',
        descr: 'Описание игры №3'
    },
    {
        id: 4,
        name: 'Игра №4',
        descr: 'Описание игры №4'
    },
    {
        id: 5,
        name: 'Игра №5',
        descr: 'Описание игры №5'
    },
    {
        id: 6,
        name: 'Игра №6',
        descr: 'Описание игры №6'
    },
])

const news = ref
([
    {
        id: 1,
        headline: 'Новость №1',
        date: '20-01-2024'
    },
    {
        id: 2,
        headline: 'Новость №2',
        date: '20-01-2024'
    },
    {
        id: 3,
        headline: 'Новость №3',
        date: '20-01-2024'
    },
    {
        id: 4,
        headline: 'Новость №4',
        date: '20-01-2024'
    },
    {
        id: 5,
        headline: 'Новость №5',
        date: '20-01-2024'
    },
    {
        id: 6,
        headline: 'Новость №6',
        date: '20-01-2024'
    },
    {
        id: 7,
        headline: 'Новость №7',
        date: '20-01-2024'
    },
    {
        id: 8,
        headline: 'Новость №8',
        date: '20-01-2024'
    },
    {
        id: 9,
        headline: 'Новость №9',
        date: '20-01-2024'
    },
    {
        id: 10,
        headline: 'Новость №10',
        date: '20-01-2024'
    },
])

</script>

<template>
    <div class="row mt-5">
        <div class="col">
            <FeaturedProductCard :product="{id: 0, name: 'Избранная игра', descr: 'Описание избранной игры'}" />
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-lg-6 col-xxl-4" v-for="game in games">
                    <ProductCard :key="game.id" :product="game" />
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <ArticleCard v-for="article in news" :key="article.id" :article="article" />
        </div>
    </div>
</template>
