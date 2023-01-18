<script setup>
import { defineProps, ref, defineEmits } from "vue";
import IconDelete from "./icons/IconDelete.vue";
import IconEdit from "./icons/IconEdit.vue";
import IconCheck from "./icons/IconCheck.vue";
import { store } from "../store.js";

const props = defineProps({
    day: Object,
    event: Object,
});
const emits = defineEmits(["editButton"]);

let newEventDetails = "";

const editEvent = (dayId, eventDetails) => {
    //emits("editButton", { dayId, eventDetails })
    store.editEvent(dayId, eventDetails);
};

const updateEvent = (dayId, originalEventDetails, updatedEventDetails) => {
    if (updatedEventDetails === "") updatedEventDetails = originalEventDetails;
    store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
    this.newEventDetails = "";
};

const deleteEvent = (dayId, eventDetails) => {
    store.deleteEvent(dayId, eventDetails);
};
</script>
<template>
    <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
        <div v-if="!event.edit">
            <div class="event bg-purple-300 text-white rounded p-1 text-sm">
                <span class="event-name"> {{ event.details }} </span>
                <div
                    class="text-center flex flex-row justify-center align-middle self-center"
                >
                    <IconEdit @click="editEvent(day.id, event.details)" />
                    <IconDelete @click="deleteEvent(day.id, event.details)" />
                </div>
            </div>
        </div>
        <div
            v-show="event.edit"
            class="event bg-purple-300 text-white rounded p-1 text-sm"
        >
            <input
                type="text"
                :placeholder="event.details"
                v-model="newEventDetails"
                class="bg-purple-300 text-slate-700 border-b-black border-b w-auto focus:bg-purple-200 text-left transition-all placeholder:text-gray-600"
            />
            <div
                class="text-center flex flex-row justify-center align-middle self-center"
            >
                <IconCheck
                    @click="updateEvent(day.id, event.details, newEventDetails)"
                />
            </div>
        </div>
    </div>
</template>
