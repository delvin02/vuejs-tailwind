import { createStore } from "vuex";
import product from "./modules/product";
import cart from "./modules/cart";
import love from "./modules/love";

const store = createStore({
    modules: {
        product,
        cart,
        love,
    },
});

export default store;
