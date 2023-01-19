import { createStore } from "vuex";

const state = {
    notes: [],
    timestamps: [],
};

const mutations = {
    ADD_NOTE(state, payload) {
        let newNote = payload;
        state.notes.push(newNote);
    },
    ADD_TIMESTAMP(state, payload) {
        let newTimeStamp = payload;
        state.timestamps.push(newTimeStamp);
    },
};

// context.commit -> calls the mutations (handles by disptatch)
const actions = {
    // Context object being exposed so it could access to the same set of methods/properties on the store instance
    // context.commit -> commit mutation &
    addNote(context, payload) {
        context.commit("ADD_NOTE", payload);
    },
    addTimestamp(context, payload) {
        context.commit("ADD_TIMESTAMP", payload);
    },
};

// Not required by Vuex but nice to have
// Avoid Repetition
// Ease testing
// Streamline anywhere

const getters = {
    getNotes: (state) => state.notes,
    getTimestamps: (state) => state.timestamps,
    getNoteCount: (state) => state.notes.length,
};

const store = createStore({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
});

export default store;
