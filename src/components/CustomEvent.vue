<script>
import EventInput from "./EventInput.vue";
export default {
    name: "CustomEvent",
    props: [],
    data() {
        return {
            notes: [],
            timestamps: [],
            placeholder: "Enter a note",
        };
    },
    components: {
        EventInput,
    },
    methods: {
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
        },
    },
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
    <EventInput :placeholder="placeholder" @add-note="addNote" />
</template>

<style scoped></style>
