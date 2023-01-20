<script setup>
import { RouterLink, RouterView } from "vue-router";
import Banner from "./components/Banner/Banner.vue";
import { onMounted } from "vue";
onMounted(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);
});
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
                            href="/cart"
                            class="block border-b-4 border-transparent p-6 hover:border-indigo-700"
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
            class="mb-4 flex hidden flex-col items-center space-y-2"
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
