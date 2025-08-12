<template>
    <section class="py-12 ">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8 text-green-600">Our Programs in Action</h2>
            <Carousel :items-to-show="itemsToShow" :wrap-around="true" :autoplay="3000" :pause-autoplay-on-hover="true"
                :transition="500">
                <Slide v-for="(item, index) in gallery" :key="index">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition mb-16">
                        <img :src="item.image" alt="" class="w-full h-64 object-cover" />
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                            <p class="text-gray-600 text-sm">{{ item.description }}</p>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const itemsToShow = ref(3);

const updateItemsToShow = () => {
    if (window.innerWidth < 768) {
        itemsToShow.value = 1; // Mobile
    } else {
        itemsToShow.value = 3; // Tablet & Desktop
    }
};

onMounted(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", updateItemsToShow);
});
const gallery = [
    {
        image: '/2.jpeg',
        title: 'Food Donation Drive',
        description: 'Providing nutritious meals to underprivileged families.'
    },
    {
        image: '/3.jpeg',
        title: 'Clean Water Access',
        description: 'Building wells and providing safe drinking water.'
    },
    {
        image: '/4.jpeg',
        title: 'Medical Outreach',
        description: 'Free health check-ups and medication distribution.'
    },
    {
        image: '/5.jpeg',
        title: 'Educational Support',
        description: 'Supplying books, uniforms, and school materials.'
    },
    {
        image: '/6.jpeg',
        title: 'Shelter Assistance',
        description: 'Helping homeless families find safe housing.'
    }
]
</script>

<style scoped>
/* Optional custom styling */
</style>
