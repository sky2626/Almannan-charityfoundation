<template>
    <div :style="backgroundStyle"
        class="h-screen flex items-center justify-center text-white bg-cover bg-center transition-all duration-500">
        <div class="flex justify-center flex-col items-center gap-2">
            <h1 class="text-4xl md:text-6xl font-bold">Hope for Humanity</h1>
            <h4 class="md:text-xl ">Give a helping hand to those who need it</h4>
            <div class="flex flex-row gap-2 mt-4 justify-center items-center md:justify-start md:items-start">
                <NuxtLink to="/Contact">
                    <div class="bg-blue-300 text-gray-800 px-8 py-4 font-semi-bold rounded-r-full rounded-bl-full">
                        Change a live
                    </div>
                </NuxtLink>
                <NuxtLink to="/About">
                    <div class="text-blue-300 px-8 py-4 font-semi-bold rounded-full border-2 border-blue-300">
                        Learn More
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                'url(/1.jpeg)',
                'url(/2.jpeg)',
                'url(/3.jpeg)',
                'url(/4.jpeg)',
                'url(/5.jpeg)',

            ],
            currentImageIndex: 0
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: this.images[this.currentImageIndex]
            }
        }
    },
    mounted() {
        this.startImageRotation();
    },
    methods: {
        startImageRotation() {
            setInterval(() => {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            }, 5000); // Change image every 5 seconds
        }
    }
}
</script>

<style scoped>
/* Add any additional styling here */
</style>