<script setup lang="ts">
import ContactUs from '~/components/ContactUs.vue';
import FormUs from '~/components/FormUs.vue';
import Location from '~/components/Location.vue';
</script>


<template>
    <div class="bg-white ">
        <div class="">
        </div>
        <div class="flex justify-center gap-16 md:gap-8 flex-col md:flex-row mx-auto py-10 max-w-4xl">
            <FormUs />
            <ContactUs />
        </div>

        <Location />


    </div>
</template>