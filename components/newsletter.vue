<template>
    <div class="newsletter-container rounded-[40px] bg px-2 flex flex-col justify-center gap-4 py-8 md:h-[350px] w-[1020px]">
        <h2 class="text-4xl font-bold text-center">Subscribe to Our Newsletter</h2>
        <p class="text-center text-xl">Stay updated with the latest news and offers.</p>
        <form @submit.prevent="submitNewsletter">
            <div class="flex justify-center items-center">
                <input type="email" v-model="email" class="rounded-full placeholder-white p-4 w-full sm:w-1/2 bg-transparent border-2 border-white focus:border-white focus:outline-none leading-relaxed " placeholder="Enter your email" required>
                <button type="submit" class="bg-blue-500 text-white font-bold rounded-full p-4 ml-2 flex justify-center items-center">
                    <IconsSend class="md:hidden text-2xl" /> 
                    <p class="hidden md:block">Subscribe</p>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
        };
    },
    methods: {
        submitNewsletter() {
            // Handle form submission (e.g., send email, show success message)
            console.log('Email:', this.email);
            this.email = '';
        },
    },
};
</script>

<style scoped>
.bg {
    background-color: rgba(0, 255, 157, 0.5);  
}
</style>