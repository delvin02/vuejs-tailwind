import axios from "axios";
import { cartsURL } from "../../../url";
const state = {
    cartItems: [],
};

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
    },
};

const actions = {
    getProductItems({ commit }) {
        axios.get(cartsURL).then((response) => {
            commit("UPDATE_CART_ITEMS", response.data);
        });
    },
    addCartItem({ commit }, payload) {
        axios
            .post(cartsURL, payload)
            .then((res) => {
                commit("UPDATE_CART_ITEMS", payload);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

const getters = {
    getCartItems: (state) => state.cartItems,
    getCartCount: (state) => {
        return state.cartItems.length;
    },
    getCartTotal: (state) => {
        return state.cartItems
            .reduce((acc, cartItem) => {
                return cartItem.price + acc;
            }, 0)
            .toFixed(2);
    },
};

const cart = {
    state,
    mutations,
    actions,
    getters,
};

export default cart;
