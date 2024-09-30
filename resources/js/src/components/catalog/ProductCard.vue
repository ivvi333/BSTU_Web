<script setup>
defineProps({
    product: {
        type: Object,
        required: true,
        validator: (obj) => obj
            && typeof obj.id === 'number'
            && typeof obj.name === 'string'
            && typeof obj.description === 'string'
            && typeof obj.price === 'number',
    }
})
</script>

<template>
    <section class="card mb-5">
        <img :src="'/img/placeholder.svg'" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">
                <router-link :to="{ name: 'product', params: { id: product.id } }" class="stretched-link">
                    {{ product.name }}
                </router-link>
            </h5>
            <p class="card-text">{{ product.description }}</p>
        </div>
    </section>
</template>

<style scoped>
.card {
    font-family: monospace;
    border: solid;
}

img.card-img-top {
    border-bottom: solid;
}

.card-title {
    background-color: #e0e0e0;
    text-align: center;
}

.card-title a {
    text-decoration: none;
    color: black;
}
</style>