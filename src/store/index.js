import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        restaurantName: "La belle Vue",
        shoppingCart: 0,
        message: "hello",
        year: 2022,
        email: "hello@labellevue.com",
        simpleMenu: [
            {
                name: "Croissant",
                image: {
                    source: "/images/crossiant.jpeg",
                    alt: "Un croissant",
                },
                inStock: true,
                quantity: 1,
                price: 2,
            },
            {
                name: "Baguette de pain",
                image: {
                    source: "/images/french-baguette.jpeg",
                    alt: "Quatre baguettes de pain",
                },
                inStock: true,
                quantity: 1,
                price: 4,
            },
            {
                name: "Éclair",
                image: {
                    source: "/images/eclair.jpeg",
                    alt: "Éclair au chocolat",
                },
                inStock: false,
                quantity: 1,
                price: 10,
            },
        ],
    },
    getters: {
        formattedCopyright: (state) => {
            return `${state.restaurantName} - ${state.year}-${state.email}`;
        },
    },
    mutations: {
        ADD_QUANTITY(state, quantity) {
            console.log("shopping cart is " + state.shoppingCart);
            state.shoppingCart = state.shoppingCart + quantity;
            console.log("quantity is " + quantity);
            console.log(state.shoppingCart);
        },
    },
    actions: {
        updateCart({commit}, quantity) {
            commit("ADD_QUANTITY", quantity);
        },
    },
    modules: {},
});
