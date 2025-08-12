<template>
    <section class="py-12">
        <div class="max-w-xl mx-auto text-center px-4">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p class="text-gray-600 mb-6">
                Stay updated with our latest news, events, and opportunities.
            </p>

            <!-- Warning message -->
            <p v-if="warningMessage" class="mb-4 text-red-600 font-medium">
                {{ warningMessage }}
            </p>

            <!-- Success message -->
            <p v-if="successMessage" class="mb-4 text-green-600 font-medium">
                {{ successMessage }}
            </p>

            <div class="flex flex-col md:flex-row gap-4">
                <input v-model="email" type="email" placeholder="Enter your email"
                    class="flex-1 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
                <button @click="subscribe" class="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
                    Subscribe
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const warningMessage = ref("");
const successMessage = ref("");

async function subscribe() {
    if (!email.value) {
        warningMessage.value = "Please enter your email before subscribing.";
        successMessage.value = "";
        return;
    }

    try {
        warningMessage.value = "";
        const res = await $fetch("/api/send-newsletter", {
            method: "POST",
            body: { email: email.value }
        });

        if (res.success) {
            successMessage.value = "Thank you for subscribing!";
            email.value = "";
        } else {
            warningMessage.value = res.message || "Subscription failed.";
        }
    } catch (err) {
        warningMessage.value = "Error sending subscription.";
    }
}
</script>
