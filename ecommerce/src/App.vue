<script setup>
import { RouterLink, RouterView } from "vue-router";
import Banner from "./components/Banner/Banner.vue";
import { computed, onMounted, ref } from "vue";
onMounted(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);
});

const cartClick = ref(false);
const toolbar = ref(false);
</script>

<script>
export default {
    name: "App",
    created() {
        console.log("hello");
    },
    computed: {
        cart() {
            return this.$store.getters.getCartItems;
        },
        getCartTotal() {
            return this.$store.getters.getCartTotal;
        },
        getCartCount() {
            return this.$store.getters.getCartCount;
        },
    },
};
</script>

<template>
    <Banner msg="60% Off Worldwide" link="facebook.com" />
    <header aria-label="Site Header" class="border-b border-gray-100">
        <div
            class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
        >
            <div class="flex items-center">
                <button type="button" class="p-2 sm:mr-4 lg:hidden">
                    <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <RouterLink
                    to="/"
                    class="logo flex content-center items-center justify-center self-center uppercase tracking-wider text-indigo-700"
                >
                    <span class="sr-only">Charles & Keith</span>
                    <span
                        class="self-center rounded-lg text-center text-xl font-bold"
                        ><strong>Charles & Keith</strong></span
                    >
                </RouterLink>
            </div>

            <div class="flex flex-1 items-center justify-end">
                <nav
                    aria-label="Site Nav"
                    class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                >
                    <RouterLink
                        to="/products"
                        class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-indigo-700"
                    >
                        Products
                    </RouterLink>
                    <RouterLink
                        to="/about"
                        class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-indigo-700"
                    >
                        About
                    </RouterLink>
                </nav>
            </div>
            <div class="ml-8 flex items-center">
                <div
                    class="flex items-center divide-x divide-gray-100 border-x border-gray-100"
                >
                    <span>
                        <a
                            class="block border-b-4 border-transparent p-6 hover:border-indigo-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                class="h-4 w-4"
                            >
                                <path
                                    d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                                />
                            </svg>

                            <span class="sr-only"> Account </span>
                        </a>
                    </span>
                    <span>
                        <a
                            class="block border-b-4 border-transparent p-6 hover:border-indigo-700"
                            @click="cartClick = !cartClick"
                        >
                            <svg
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>

                            <span class="sr-only">Cart</span>
                        </a>
                        <div
                            class="absolute right-48 w-screen max-w-sm border border-gray-600 bg-gray-100 p-8 pt-4 transition-all"
                            aria-modal="true"
                            role="dialog"
                            tabindex="-1"
                            v-if="cartClick"
                        >
                            <button
                                class="relative ml-auto -mr-4 block text-gray-600 transition hover:scale-110"
                                @click="cartClick = !cartClick"
                            >
                                <span class="sr-only">Close cart</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            <div class="z-20 mt-4 space-y-6">
                                <ul class="space-y-4">
                                    <li
                                        class="flex items-center"
                                        v-for="item in cart"
                                        v-if="cart.length"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt=""
                                            class="h-16 w-16 rounded object-cover"
                                        />

                                        <div class="ml-4">
                                            <h3 class="text-sm text-gray-900">
                                                {{ item.title }}
                                            </h3>

                                            <dl
                                                class="mt-0.5 space-y-px text-[10px] text-gray-600"
                                            >
                                                <div>
                                                    <dt class="inline">
                                                        Size:
                                                    </dt>
                                                    <dd class="inline">XXS</dd>
                                                </div>

                                                <div>
                                                    <dt class="inline">
                                                        Price:
                                                    </dt>
                                                    <dd class="inline">
                                                        {{ item.price }}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </li>
                                    <li v-else>
                                        <div class="ml-0">
                                            <h3
                                                class="text-sm font-bold text-indigo-600"
                                            >
                                                No cart added.
                                            </h3>
                                        </div>
                                    </li>
                                </ul>

                                <div class="space-y-4 text-center">
                                    <a
                                        href="#"
                                        class="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                                    >
                                        View my cart ({{ getCartCount }})
                                    </a>

                                    <a
                                        href="#"
                                        class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                    >
                                        Checkout: Total ${{ getCartTotal }}
                                    </a>

                                    <a
                                        href="#"
                                        class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                                        @click="cartClick = !cartClick"
                                    >
                                        Continue shopping
                                    </a>
                                </div>
                            </div>
                        </div>
                    </span>

                    <span>
                        <a
                            href="/account"
                            class="block border-b-4 border-transparent p-6 hover:border-indigo-700"
                        >
                            <svg
                                class="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>

                            <span class="sr-only"> Account </span>
                        </a>
                    </span>

                    <span class="hidden sm:block">
                        <a
                            href="/search"
                            class="block border-b-4 border-transparent p-6 hover:border-indigo-700"
                        >
                            <svg
                                class="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>

                            <span class="sr-only"> Search </span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </header>

    <RouterView />

    <div data-dial-init class="group fixed right-6 bottom-6">
        <div
            id="speed-dial-menu-default"
            class="mb-4 flex flex-col items-center space-y-2"
            v-if="toolbar"
        >
            <button
                type="button"
                data-tooltip-target="tooltip-share"
                data-tooltip-placement="left"
                class="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
            >
                <svg
                    aria-hidden="true"
                    class="-ml-px h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
                    ></path>
                </svg>
                <span class="sr-only">Share</span>
            </button>
            <div
                id="tooltip-share"
                role="tooltip"
                class="tooltip invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
                Share
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
                type="button"
                data-tooltip-target="tooltip-print"
                data-tooltip-placement="left"
                class="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
            >
                <svg
                    aria-hidden="true"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <span class="sr-only">Print</span>
            </button>
            <div
                id="tooltip-print"
                role="tooltip"
                class="tooltip invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
                Print
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
                type="button"
                data-tooltip-target="tooltip-download"
                data-tooltip-placement="left"
                class="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
            >
                <svg
                    aria-hidden="true"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z"
                        fill-rule="evenodd"
                    ></path>
                </svg>
                <span class="sr-only">Download</span>
            </button>
            <div
                id="tooltip-download"
                role="tooltip"
                class="tooltip invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
                Download
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
                type="button"
                data-tooltip-target="tooltip-copy"
                data-tooltip-placement="left"
                class="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-400"
            >
                <svg
                    aria-hidden="true"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                    ></path>
                    <path
                        d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                    ></path>
                </svg>
                <span class="sr-only">Copy</span>
            </button>
            <div
                id="tooltip-copy"
                role="tooltip"
                class="tooltip invisible absolute z-10 inline-block w-auto rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
                Copy
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
        <button
            type="button"
            data-dial-toggle="speed-dial-menu-default"
            aria-controls="speed-dial-menu-default"
            aria-expanded="false"
            class="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="toolbar = !toolbar"
        >
            <svg
                aria-hidden="true"
                class="h-8 w-8 transition-transform group-hover:rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
            </svg>
            <span class="sr-only">Open actions menu</span>
        </button>
    </div>

    <footer
        class="rounded-lg border-t border-gray-100 bg-white p-4 shadow md:px-6 md:py-8"
    >
        <div class="sm:flex sm:items-center sm:justify-between">
            <RouterLink
                to="/"
                class="logo flex content-center items-center justify-center self-center uppercase tracking-wider text-indigo-700"
            >
                <span class="sr-only">Charles & Keith</span>
                <span
                    class="self-center rounded-lg text-center text-xl font-bold"
                    ><strong>Charles & Keith</strong></span
                >
            </RouterLink>
            <ul
                class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0"
            >
                <li>
                    <RouterLink
                        to="/"
                        class="mr-4 text-gray-500 hover:underline md:mr-6"
                        >Home</RouterLink
                    >
                </li>
                <li>
                    <RouterLink
                        to="/about"
                        class="mr-4 text-gray-500 hover:underline md:mr-6"
                        >About</RouterLink
                    >
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-100 sm:mx-auto lg:my-8" />
        <span
            class="block text-sm text-gray-500 dark:text-gray-400 sm:text-center"
            >©
            <a href="https://flowbite.com/" class="hover:underline"
                >CHARLES & KEITH</a
            >. All Rights Reserved.
        </span>
    </footer>
</template>

<style>
.logo {
    font-family: "Nunito", sans-serif;
}
</style>
