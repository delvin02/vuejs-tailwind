import axios from "axios";
import { productsURL } from "../../../url";
const state = {
    productItems: [],
};

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    },
};

const actions = {
    getProductItems({ commit }) {
        axios.get(productsURL).then((response) => {
            commit("UPDATE_PRODUCT_ITEMS", response.data);
        });
    },
};

const getters = {
    getProductItems: (state) => state.productItems,
};

const products = {
    state,
    mutations,
    actions,
    getters,
};

export default products;
