<template>
    {{ products }}
</template>

<script>
import products from "../JSON/products.json";
export default {
    data() {
        return {
            products: products,
        };
    },
};
</script>
