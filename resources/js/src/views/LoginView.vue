<script setup>
import axios from 'axios';
import { ref } from 'vue';
import router from "@/router";
import { useMainStore } from "@/store";

const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const mainStore = useMainStore();

const onLogin = () => {
    emailError.value = '';
    passwordError.value = '';
    if (email.value.trim().length === 0) {
        emailError.value = 'Введите email';
    }
    if (password.value.trim().length === 0) {
        passwordError.value = 'Введите пароль';
    }
    if (!emailError.value && !passwordError.value) {
        axios.post('/api/login', { email: email.value, password: password.value })
            .then((response) => {
                mainStore.setToken(response.data.token);
                router.push({ name: 'home' });
            })
            .catch((errors) => emailError.value = errors.response.data.message);
    }
}
</script>

<template>
    <section class="login-form">
        <div class="form-header p-3">
            <h1>Авторизация</h1>
        </div>
        <form @submit.prevent="onLogin">
            <div class="p-3">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-control" v-model="email">
                <div class="errors">{{ emailError }}</div>
            </div>
            <div class="p-3">
                <label class="form-label">Пароль</label>
                <input type="password" name="password" class="form-control" v-model="password">
                <div class="errors">{{ passwordError }}</div>
            </div>
            <div class="text-center mb-3">
                <button type="submit" class="btn btn-secondary">Войти</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
.login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 150%;
    font-family: monospace;
    border: solid;
}

.form-header {
    border-bottom: solid;
    background-color: #e0e0e0;
}

.errors {
    font-size: 12px;
    color: red;
}
</style>