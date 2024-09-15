<template>
    <div :style="backgroundStyle"
        class="h-screen flex items-center justify-center text-white bg-cover bg-center transition-all duration-500">
        <div class="flex justify-center flex-col items-center gap-2">
            <h1 class="text-4xl md:text-6xl font-bold">Hope for Humanity</h1>
            <h4 class="md:text-xl ">Give a helping hand to those who need it</h4>
            <div class="flex gap-2 ">
                <UButton to="/About" target="_blank" color="white" class="bg-blue-500">Learn more</UButton>
                <UButton to="/Contact" target="_blank">Donate Now</UButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                'url(https://cdn.pixabay.com/photo/2017/01/20/13/01/africa-1994846_1280.jpg)',
                'url(https://cdn.pixabay.com/photo/2015/11/21/13/04/children-1054858_1280.jpg)',
                'url(https://cdn.pixabay.com/photo/2019/11/11/04/33/child-4617142_1280.jpg)'
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