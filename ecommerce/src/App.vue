<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from "vue";
import ProductList from "./components/ProductList.vue";
onMounted(() => {
  const script = document.createElement("script");

  script.src = "https://buttons.github.io/buttons.js";
  script.async = true;

  document.body.appendChild(script);
});
</script>

<template>
  <div class="relative bg-indigo-600 px-4 py-3 pr-14 text-white">
    <p class="text-left text-sm font-medium sm:text-center">
      Love Alpine JS? Check out this new course!

      <a class="underline" href="/alpinejs"> Learn More &rarr; </a>
    </p>

    <button
      aria-label="Close"
      class="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
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

        <a
          href="#"
          class="flex justify-center self-center align-middle text-black"
        >
          <span class="sr-only">EON</span>
          <span
            class="inline-block h-10 w-32 rounded-lg bg-gray-200 text-center text-xl font-bold"
            >EON</span
          >
        </a>
      </div>

      <div class="flex flex-1 items-center justify-end">
        <nav
          aria-label="Site Nav"
          class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
        >
          <a
            href="/about"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
          >
            About
          </a>

          <a
            href="/news"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
          >
            News
          </a>

          <a
            href="/products"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
          >
            Products
          </a>

          <a
            href="/contact"
            class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
          >
            Contact
          </a>
        </nav>

        <div class="ml-8 flex items-center">
          <div
            class="flex items-center divide-x divide-gray-100 border-x border-gray-100"
          >
            <span>
              <a
                href="/cart"
                class="block border-b-4 border-transparent p-6 hover:border-red-700"
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
                class="block border-b-4 border-transparent p-6 hover:border-red-700"
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
                class="block border-b-4 border-transparent p-6 hover:border-red-700"
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
    </div>
  </header>

  <ProductList />
</template>
