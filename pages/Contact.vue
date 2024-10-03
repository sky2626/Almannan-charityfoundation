<script setup lang="ts">
import ContactUs from '~/components/ContactUs.vue';
import FormUs from '~/components/FormUs.vue';
import Location from '~/components/Location.vue';
</script>


<template>
    <div>
        <div class="h-64 bg-blue-300 flex items-center justify-center">
            <h1 class="text-2xl font-bold">Let's get in touch</h1>
        </div>
        <div class="bg-white mx-4">

            <div class="flex justify-center gap-16 md:gap-8 flex-col md:flex-row mx-auto mt-24 py-10 max-w-4xl">
                <FormUs />
                <ContactUs />
            </div>
            <Location />
        </div>
    </div>
</template>
<style></style>