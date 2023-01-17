<script setup>
import { defineProps } from "vue";
import CalendarEvent from "./CalendarEvent.vue";

defineProps({
    day: Object,
});

// Arrow function
const setActiveDay = (dayId) => {
    store.setActiveDay(dayId);
};

const editButton = (e) => {
    console.log("Emitted");
};
</script>

<template>
    <td
        class="border-r p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
        @click="setActiveDay(day.id)"
    >
        <div
            class="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden"
        >
            <div class="top h-5 w-full">
                <span class="text-gray-500">{{ day.id }} </span>
            </div>
            <div class="bottom flex-grow h-auto py-1 w-full cursor-pointer">
                <CalendarEvent
                    v-for="(event, index) in day.events"
                    :key="index"
                    :day="day"
                    :event="event"
                    v-on:editButton="editButton($event)"
                />
            </div>
        </div>
    </td>
</template>

<style scoped></style>
