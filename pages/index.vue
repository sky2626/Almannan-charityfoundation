<script setup lang="ts">
import Newsletter from '~/components/newsletter.vue';
</script>

<template>
    <div class="relative bg-emerald-50">
        <Hero />
        <div class="relative top-[-60px]">
            <Help />
        </div>
        <div class="mx-2 my-24">
            <Live />
        </div>
        <div class="py-[50px] px-[260px] bg-emerald-100">
            <div class="flex justify-center items-center flex-col mb-16">
                <h1 class=" text-lg text-blue-300">- Campaingns</h1>
                <h1 class="font-bold text-2xl text-blue-300">Featured Campaign</h1>
                <p class="text-gray-600">we have be changing people in so many ways</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                <Card imageUrl="https://cdn.pixabay.com/photo/2016/01/14/02/48/girl-1139277_1280.jpg"
                    title="Card Title 1" description="Card Description 1" />
                <Card imageUrl="https://cdn.pixabay.com/photo/2016/01/14/02/48/girl-1139277_1280.jpg"
                    title="Card Title 2" description="Card Description 2" />
                <Card imageUrl="https://cdn.pixabay.com/photo/2016/01/14/02/48/girl-1139277_1280.jpg"
                    title="Card Title 3" description="Card Description 3" />
            </div>
        </div>
        <div class="my-[80px] mx-[8px] flex justify-center">
            <Newsletter />
        </div>
        <div>
            <Mainfooter />
        </div>
    </div>

</template>
