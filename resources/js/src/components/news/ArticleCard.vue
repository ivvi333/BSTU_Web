<script setup>
defineProps({
    article: {
        type: Object,
        required: true,
        validator: (obj) => obj
            && typeof obj.id === 'number'
            && typeof obj.title === 'string'
            && typeof obj.content === 'string',
    }
})
</script>

<template>
    <section class="card mb-3">
        <div class="row g-0 align-items-center">
            <div class="col-2 text-center">
                <img :src="'/img/article.svg'" style="height: 50px;">
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h5 class="card-title">
                        <router-link :to="{ name: 'article', params: { id: article.id } }" class="stretched-link">
                            {{ article.title }}
                        </router-link>
                    </h5>
                </div>
            </div>
            <div class="col-md-2 text-center article-date">
                {{ article.date_published }}
            </div>
        </div>
    </section>
</template>

<style scoped>
.card {
    font-family: monospace;
    border: solid;
}

.card-title {
    background-color: #e0e0e0;
    text-align: center;
    margin: 0;
}

.card-title a {
    text-decoration: none;
    color: black;
}

.card-body {
    border-style: none none none solid;
}

.article-date {
    border-style: solid none none none;
}

@media screen and (min-width: 768px) {
    .article-date {
        border-style: none;
    }

    .card-body {
        border-style: none solid none solid;
    }
}
</style>