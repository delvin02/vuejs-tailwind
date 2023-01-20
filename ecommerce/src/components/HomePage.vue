<template>
    <main>
        <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div
                        class="flex bg-indigo-600 p-8 md:p-12 lg:px-16 lg:py-24"
                    >
                        <div class="flex flex-col justify-between">
                            <div>
                                <div class="mx-auto max-w-xl text-center">
                                    <h2
                                        class="text-2xl font-bold text-white md:text-3xl"
                                    >
                                        discover new you, with<br />
                                        <span
                                            class="logo bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 bg-clip-text font-bold uppercase text-transparent"
                                            >charles & keith.</span
                                        >
                                    </h2>

                                    <p
                                        class="hidden text-white/90 sm:mt-4 sm:block"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Et, egestas tempus
                                        tellus etiam sed. Quam a scelerisque
                                        amet ullamcorper eu enim et fermentum,
                                        augue. Aliquet amet volutpat quisque ut
                                        interdum tincidunt duis.
                                    </p>
                                </div>
                            </div>
                            <div class="mx-auto mt-4 md:mt-8">
                                <a
                                    href="#"
                                    class="rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                    Get Started Today
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2"
                    >
                        <img
                            alt="Student"
                            src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                            class="h-40 w-full border-2 border-slate-900 object-cover p-3 sm:h-56 md:h-full"
                        />

                        <img
                            alt="Student"
                            src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            class="h-40 w-full border-2 border-slate-900 object-cover p-3 sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    name: "HomePage",
};
</script>
