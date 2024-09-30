<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

import ProductCard from '@/components/catalog/ProductCard.vue';

const products = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('/api/products');
        products.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <div class="row mt-5">
        <div class="col-sm-6 col-lg-3 col-xxl-2" v-for="product in products" :key="product.id" >
            <ProductCard :product="product" />
        </div>
    </div>
</template>
