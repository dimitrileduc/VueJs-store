<template>
    <div id="app" class="app">
        <h1>{{ restaurantName }}</h1>
        <p class="description">
            Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés
            pour notre pain et nos merveilleuses pâtisseries. Faites vous
            plaisir dès le matin ou avec un goûter réconfortant. Mais attention,
            vous verrez qu'il est difficile de s'arrêter.
        </p>

        <section class="menu">
            <h2>Menu</h2>
            <MenuItem
                v-for="item in simpleMenu"
                :name="item.name"
                :image="item.image"
                :quantity="item.quantity"
                :inStock="item.inStock"
                :key="item.name"
                :price="item.price"
            />
        </section>

        <aside class="shopping-cart">
            <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
        </aside>

        <footer class="footer">
            <p>{{ formattedCopyright }}</p>
        </footer>
    </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import MenuItem from "../components/MenuItem";
export default {
    name: "Home",
    components: {
        MenuItem,
    },
    data() {
        return {
            message: "hello",
        };
    },
    computed: {
        copyright() {
            const currentYear = new Date().getFullYear();
            return `Copyright ${this.restaurantName} ${currentYear}`;
        },
        ...mapState({
            restaurantName: "restaurantName",
            shoppingCart: "shoppingCart",
            simpleMenu: "simpleMenu",
        }),
        ...mapGetters(["formattedCopyright"]),
    },
    methods: {},
};
</script>
