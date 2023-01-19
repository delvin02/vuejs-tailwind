<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <!-- Acts as a layout page -->
    <!-- Anything within the elements will not change except RouterView depending on the link that it directs itself to-->
    <header class="flex flex-col">
        <img
            alt="Vue logo"
            class="logo mx-auto"
            src="@/assets/logo.svg"
            width="125"
            height="125"
        />
        <HelloWorld msg="You did it!" />

        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center">
                <div class="md:flex md:items-center md:gap-12"></div>

                <div class="hidden md:block">
                    <nav aria-label="Site Nav">
                        <ul class="flex items-center gap-6 text-sm">
                            <li>
                                <RouterLink to="/">Home</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/about">About</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/calendar">Calendar</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/event">Event</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/ecommerce"
                                    >Ecommerce</RouterLink
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <RouterView />
</template>

<style scoped></style>
