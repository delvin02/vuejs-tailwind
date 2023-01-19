<template>
    <span
        class="bg-transparent text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-400"
    >
        <strong> Notes counted: {{ noteCount }} </strong>
    </span>
</template>

<script>
// emitter is a global variable
import store from "../store/noteStore";

export default {
    name: "EventCount",
    computed: {
        noteCount() {
            return this.$store.getters.getNoteCount;
        },
    },
};
</script>
