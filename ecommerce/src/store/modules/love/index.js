import axios from "axios";
import { loveItemsURL } from "../../../url";

const state = {
    lovedItems: [],
};

const mutations = {
    UPDATE_LOVE_ITEMS(state, payload) {
        state.cartItems = payload;
    },
};

const actions = {
    getLovedItems({ commit }) {
        axios.get(cartsURL).then((response) => {
            commit("UPDATE_LOVE_ITEMS", response.data);
        });
    },
    addLoveItem({ commit }, payload) {
        axios
            .post(loveItemsURL, payload)
            .then((res) => {
                console.log(res.message);
                commit("UPDATE_LOVE_ITEMS", payload);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

const getters = {
    getlovedItems: (state) => state.lovedItems,
    getlovedCounts: (state) => {
        return state.lovedItems.length;
    },
};

const love = {
    state,
    mutations,
    actions,
    getters,
};

export default love;
