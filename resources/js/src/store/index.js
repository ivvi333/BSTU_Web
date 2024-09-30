import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        cart: {
            items: [],
        },
        user: {
            token: null,
        },
    }),
    getters: {
        getCartCount(state) {
            return state.cart.items.length;
        },
        isAuth(state) {
            return state.user.token !== null;
        },
        getCart(state) {
            return state.cart;
        },
    },
    actions: {
        addToCart(product) {
            this.cart.items.push(product);
        },
        setToken(token) {
            this.user.token = token;
        },
        initCart(cart) {
            this.cart = cart;
        },
    },
});
