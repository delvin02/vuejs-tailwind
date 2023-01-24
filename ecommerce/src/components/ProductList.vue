<template>
    <section>
        <div
            class="mx-auto max-w-screen-xl border-x-2 border-gray-100 sm:py-12"
        >
            <header class="mx-0 border-b-2 border-gray-100 px-6 pb-6">
                <h2
                    class="text-xl font-bold uppercase text-gray-900 sm:text-3xl"
                >
                    <span
                        class="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
                    >
                        Summer</span
                    >, Autumn, Winter, Spring.
                </h2>

                <p class="mt-4 max-w-md text-gray-500">
                    Your exploration starts here.
                </p>
            </header>

            <div class="mt-8 flex items-center justify-between px-6">
                <div
                    class="flex divide-x divide-gray-100 rounded border border-gray-100"
                >
                    <button
                        class="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                        @click="isColumn = true"
                        :class="{ 'bg-slate-100': isColumn }"
                    >
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
                                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                            />
                        </svg>
                    </button>

                    <button
                        class="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
                        @click="isColumn = false"
                        :class="{ 'bg-slate-100': !isColumn }"
                    >
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
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </button>
                </div>

                <div>
                    <label for="SortBy" class="sr-only">SortBy</label>

                    <select
                        id="SortBy"
                        class="h-10 rounded border-gray-300 text-sm"
                    >
                        <option>Sort By</option>
                        <option value="Title, DESC">Title, DESC</option>
                        <option value="Title, ASC">Title, ASC</option>
                        <option value="Price, DESC">Price, DESC</option>
                        <option value="Price, ASC">Price, ASC</option>
                    </select>
                </div>
            </div>

            <ul class="z-10 mt-4 grid gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
                <li v-for="product in getProductItems" :key="product.id">
                    <a
                        href="#"
                        class="group block overflow-hidden"
                        v-if="isColumn"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt=""
                            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                        />

                        <div class="relative bg-white pt-3">
                            <div class="flex justify-between">
                                <h3
                                    class="text-xs text-gray-700 hover:underline hover:underline-offset-4"
                                >
                                    {{ product.title }}
                                </h3>
                                <h3
                                    v-if="product.discount"
                                    class="whitespace-nowrap rounded-full bg-indigo-100 px-2.5 text-xs text-indigo-700"
                                >
                                    Hot Sale!
                                </h3>
                            </div>
                            <p class="mt-2">
                                <span class="tracking-wider text-gray-900"
                                    >{{ product.price }} AUD
                                </span>
                            </p>
                        </div>
                        <div class="inline-flex gap-2 rounded p-2">
                            <button @click="addToLovedItems(product)">
                                <LoveButton />
                            </button>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import Cart from "./Icon/Cart.vue";
import LoveButton from "./Icon/LoveButton.vue";
import axios from "axios";
import { cartsURL } from "../url";

export default {
    name: "ProductList",
    data() {
        return {
            isColumn: true,
        };
    },
    components: {
        Cart,
        LoveButton,
    },
    methods: {
        addToLovedItems(product) {
            this.$store.dispatch("addCartItem",product);
        },
    },
    computed: {
        ...mapGetters(["getProductItems"]),
    },
    created() {
        this.$store.dispatch("getProductItems");
    },
};
</script>
