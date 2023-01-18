<script>
// Import Child
import CalendarWeek from "../components/CalendarWeek.vue";
import CalendarEntry from "../components/CalendarEntry.vue";

export default {
    components: {
        CalendarWeek,
        CalendarEntry,
    },
};
</script>

<template>
    <div>
        <CalendarWeek />
        <CalendarEntry />
    </div>
</template>
