<template>
    <div>
        <input
            type="text"
            id="small-input"
            :placeholder="placeholder"
            @keyup.enter="monitorEnterKey"
            v-model="input"
            :class="
                error
                    ? 'border-red-500 placeholder:text-red-400 focus:border-red-500'
                    : 'border-gray-300 border '
            "
            class="block border p-2 mx-auto w-1/2 text-white bg-transparent rounded-lg sm:text-xs focus:ring-gray-500"
        />
        <p
            class="w-1/2 mx-auto mt-2 text-sm text-red-600 dark:text-red-500"
            v-if="error"
        >
            <span class="font-medium">Oh, snapp!</span> {{ errorMessage }}
        </p>
    </div>
    <div class="my-2 flex justify-center"></div>
</template>

<script>
import mitt from "mitt";

const emitter = mitt();

export default {
    name: "EventInput",
    props: ["placeholder"],
    data() {
        return {
            input: "",
            error: false,
            errorMessage: "",
        };
    },
    methods: {
        monitorEnterKey() {
            if (this.input === "")
                return (
                    (this.error = true),
                    (this.errorMessage = "Please key in details")
                );
            // emit event
            // this.emitter.emit("add-note", {
            //     // refering back to the model input
            //     note: this.input,
            //     timestamp: new Date().toLocaleString(),
            // });

            // Dispatch to state management (Action)
            this.$store.dispatch("addNote", this.input);
            this.$store.dispatch("addTimestamp", new Date().toLocaleString());
            this.input = "";
            this.error = false;
        },
    },
};
</script>
