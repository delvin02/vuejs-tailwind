<script>
import { store } from "../store.js";
export default {
    name: "CalendarEntry",
    data() {
        return {
            inputEntry: "",
            error: false,
        };
    },
    methods: {
        submitEvent(eventDetails) {
            if (eventDetails === "") return (this.error = true);

            store.submitEvent(eventDetails);
            this.inputEntry = "";
            this.error = false;
        },
    },
    computed: {
        titleOfActiveDay() {
            return store.getActiveDay().fullTitle;
        },
    },
};
</script>

<template>
    <div class="relative">
        <div class="mt-3 w-1/4 mx-auto">
            <div>
                <label class="sr-only"> Event </label>
                <input
                    type="text"
                    placeholder="New Event"
                    class="w-full rounded-md text-center text-stone-800 py-2.5 pr-10 shadow-sm sm:text-sm border-2"
                    v-model="inputEntry"
                    :class="error ? 'border-red-500' : 'border-gray-200'"
                    required
                />
                <span
                    class="absolute inset-y-0 right-0 grid w-10 place-content-center"
                >
                    <button
                        type="button"
                        class="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
                        @click="submitEvent(inputEntry)"
                    >
                        <span class="sr-only">Submit</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-4 w-4"
                        >
                            <path
                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                            />
                        </svg>
                    </button>
                </span>
            </div>
            <p
                class="text-center font-medium text-red-500 text-xs mt-1 ml-1"
                v-if="error"
            >
                Invalid username field !
            </p>
            <p class="text-xl font-bold text-center my-1 text-purple-400">
                Day of Event: {{ titleOfActiveDay }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>
