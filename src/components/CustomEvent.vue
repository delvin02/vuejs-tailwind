<script>
import EventInput from "./EventInput.vue";
import EventCount from "./EventCount.vue";
// emitter is a global variable

export default {
    name: "CustomEvent",
    props: [],
    data() {
        return {
            placeholder: "Enter a note",
        };
    },
    computed: {
        notes() {
            return this.$store.getters.getNotes;
        },
        timestamps() {
            return this.$store.getters.getTimestamps;
        },
    },
    components: {
        EventInput,
        EventCount,
    },
    // created() {
    //     this.emitter.on("add-note", (event) => this.addNote(event));
    // },
    // methods: {
    //     addNote(event) {
    //         this.notes.push(event.note);
    //         this.timestamps.push(event.timestamp);
    //     },
    // },
};
</script>
<template>
    <div class="notes-section w-1/2 mx-auto my-8">
        <div class="columns-2 text-slate-300 text-center">
            <div class="column has-text-centered">
                <strong class="border-b border-slate-100">Notes</strong>
                <div class="notes" v-for="task in notes">
                    {{ task }}
                </div>
            </div>
            <div class="column has-text-centered">
                <strong class="border-b border-slate-100">Timestamp</strong>
                <div class="timestamp" v-for="time in timestamps">
                    {{ time }}
                </div>
            </div>
        </div>
    </div>
    <EventInput :placeholder="placeholder" />
    <div class="flex justify-center">
        <EventCount />
    </div>
</template>

<style scoped></style>
