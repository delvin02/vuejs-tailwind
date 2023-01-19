<template>
    <main>
        Hello!
        <ProductDisplay />
    </main>
</template>

<script>
import ProductDisplay from "./ProductDisplay.vue";

export default {
    name: "parentEcommerce",
    components: {
        ProductDisplay,
    },
};
</script>
