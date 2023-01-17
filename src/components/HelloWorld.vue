<script setup>
// Props
defineProps({
    // msg variable is declared
    msg: {
        type: String,
        required: true,
    },
});
</script>

<!-- Component content-->
<template>
    <div class="greetings mx-auto">
        <!-- msg is printed through the passed in argument -->
        <h1 class="green">{{ msg }}</h1>
        <h3>
            You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener"
                >Vite</a
            >
            +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a
            >.
        </h3>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
    text-align: center;
}

.greetings h1,
.greetings h3 {
    padding-top: 1rem;
    text-align: center;
}
</style>
