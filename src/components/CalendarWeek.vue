<script setup>
import CalendarDay from "./CalendarDay.vue";
import { store } from "../store.js";
</script>
<template>
    <!-- component -->
    <div class="container mx-auto mt-10">
        <div class="wrapper bg-white rounded shadow w-full text-stone-800">
            <div class="header flex justify-between border-b p-2">
                <span class="text-lg font-bold"> 2020 July </span>
            </div>
            <table class="w-full">
                <thead>
                    <tr>
                        <th
                            class="p-2 border-r border-b h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                        >
                            <span
                                class="xl:block lg:block md:block sm:block hidden"
                                >Monday</span
                            >
                            <span
                                class="xl:hidden lg:hidden md:hidden sm:hidden block"
                                >Mon</span
                            >
                        </th>
                        <th
                            class="p-2 border-r border-b h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                        >
                            <span
                                class="xl:block lg:block md:block sm:block hidden"
                                >Tuesday</span
                            >
                            <span
                                class="xl:hidden lg:hidden md:hidden sm:hidden block"
                                >Tue</span
                            >
                        </th>
                        <th
                            class="p-2 border-r border-b h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                        >
                            <span
                                class="xl:block lg:block md:block sm:block hidden"
                                >Wednesday</span
                            >
                            <span
                                class="xl:hidden lg:hidden md:hidden sm:hidden block"
                                >Wed</span
                            >
                        </th>
                        <th
                            class="p-2 border-r border-b h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                        >
                            <span
                                class="xl:block lg:block md:block sm:block hidden"
                                >Thursday</span
                            >
                            <span
                                class="xl:hidden lg:hidden md:hidden sm:hidden block"
                                >Thu</span
                            >
                        </th>
                        <th
                            class="p-2 border-r border-b h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                        >
                            <span
                                class="xl:block lg:block md:block sm:block hidden"
                                >Friday</span
                            >
                            <span
                                class="xl:hidden lg:hidden md:hidden sm:hidden block"
                                >Fri</span
                            >
                        </th>
                        <th
                            class="p-2 border-r border-b h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                        >
                            <span
                                class="xl:block lg:block md:block sm:block hidden"
                                >Saturday</span
                            >
                            <span
                                class="xl:hidden lg:hidden md:hidden sm:hidden block"
                                >Sat</span
                            >
                        </th>
                        <th
                            class="p-2 border-r border-b h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
                        >
                            <span
                                class="xl:block lg:block md:block sm:block hidden"
                                >Sunday</span
                            >
                            <span
                                class="xl:hidden lg:hidden md:hidden sm:hidden block"
                                >Sun</span
                            >
                        </th>
                    </tr>
                </thead>

                <!-- Mount Child element -->
                <tbody>
                    <tr class="text-center h-20">
                        <CalendarDay
                            v-for="day in store.state.data"
                            :key="day.id"
                            :day="day"
                        />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
