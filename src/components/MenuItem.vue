<script>
import {mapActions} from "vuex";
export default {
    name: "MenuItem",
    props: {
        image: {
            type: Object,
            required: true,
        },
        inStock: {
            type: Boolean,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },

    methods: {
        applyReduction: function () {
            this.isReduction = true;
        },
        ...mapActions(["updateCart"]),
    },
    data() {
        return {
            qty: this.quantity,
            isReduction: false,
            reducePrice: this.price * 0.9,
        };
    },
    beforeCreate() {
        console.log("Je ne suis pas encore  créé");
    },
    created() {
        console.log("Je suis créé !");
    },
    beforeMount() {
        this.applyReduction();
    },
    mounted() {
        console.log("Je suis monté sur le DOM!");
    },
    beforeDestroy() {
        console.log("Je suis sur le point de disparaître du DOM !");
    },
    destroyed() {
        console.log("Je suis supprimé");
    },
};
</script>

//prop can only be updated by its creator component. // And MenuItem is not the
creator.

<template>
    <div class="menu-item">
        <img class="menu-item__image" :src="image.source" :alt="image.alt" />
        <div>
            <h3>{{ name }}</h3>
            <p v-if="inStock">En stock</p>
            <p v-else>En rupture de stock</p>

            <p v-if="isReduction">Reduction : {{ reducePrice }}</p>
            <p v-else>{{ price }}</p>

            <p>{{ price }} Eur</p>
            <div>
                <label for="add-item-quantity">Quantité : {{ qty }}</label>
                <input
                    v-model.number="qty"
                    id="add-item-quantity"
                    type="number"
                />
                <button @click="updateCart(qty)">Ajouter au panier</button>
            </div>
        </div>
    </div>
</template>

<style></style>
