<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const product = ref();
const route = useRoute();

onMounted(async () => {
    try {
        const response = await axios.get(`/api/products/${route.params.id}`);
        product.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <div class="row g-0 product-box" v-if="product">
        <div class="col-md-6 product-img">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="'/img/placeholder.svg'" class="img-fluid d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img :src="'/img/placeholder.svg'" class="img-fluid d-block w-100">
                    </div>
                    <div class="carousel-item">
                        <img :src="'/img/placeholder.svg'" class="img-fluid d-block w-100">
                    </div>
                </div>
                <button class="carousel-control-prev" style="z-index: 10;" type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" style="z-index: 10;" type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
        <div class="col-md-6 p-3">
            <h1>{{ product.name }}</h1>
            {{ product.description }}
        </div>
    </div>
</template>

<style scoped>
.product-box {
    font-family: monospace;
    border-style: none solid solid solid;
}
.product-img {
    border-style: none none solid none;
}

@media screen and (min-width: 768px) {
    .product-img {
        border-style: none solid none none;
    }
}
</style>