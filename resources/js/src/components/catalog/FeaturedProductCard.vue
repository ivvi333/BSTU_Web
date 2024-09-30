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
        <div class="row g-0">
            <div class="col-md-6 product-header">
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="'/img/placeholder.svg'" class="img-fluid rounded d-block w-100">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Первый слайд</h5>
                                <p>Текст первого слайда.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img :src="'/img/placeholder.svg'" class="img-fluid rounded d-block w-100">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Второй слайд</h5>
                                <p>Текст второго слайда.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img :src="'/img/placeholder.svg'" class="img-fluid rounded d-block w-100">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Третий слайд</h5>
                                <p>Текст третьего слайда.</p>
                            </div>
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
            <div class="col-md-6">
                <div class="card-body">
                    <h5 class="card-title">
                        <router-link :to="{ name: 'product', params: { id: product.id } }" class="stretched-link">
                            {{ product.name }}
                        </router-link>
                    </h5>
                    <p class="card-text">{{ product.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.card {
    font-family: monospace;
    border: solid;
}

.product-header {
    border-style: none none solid none;
}

@media screen and (min-width: 768px) {
    .product-header {
        border-style: none solid none none;
    }
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