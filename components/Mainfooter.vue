<template>
    <div class="bg-gray-900 text-white ">
        <!-- Newsletter Section -->
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
                    <Input v-model="email" type="email" placeholder="Enter your email"
                        class="flex-1 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <Button @click="subscribe" class="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-300 py-8 mt-12">
            <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                <!-- Column 1 -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-4">About Us</h3>
                    <p class="text-sm">
                        We provide quality content, resources, and updates to help you stay informed and inspired.
                    </p>
                </div>

                <!-- Column 2 -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="/" class="hover:text-white">Home</a></li>
                        <li><a href="/about" class="hover:text-white">About</a></li>
                        <li><a href="/project" class="hover:text-white">Project</a></li>
                        <li><a href="/volunteer" class="hover:text-white">Volunteer</a></li>
                        <li><a href="/contact" class="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <!-- Column 3 -->
                <div>
                    <h3 class="text-lg font-semibold text-white mb-4">Contact</h3>
                    <p>Email: support@almannancharityfoundation.org/</p>
                    <p>Phone: +233 530 492 371</p>
                    <div>
                        <p class="mt-4">Follow us on:</p>
                        <div class="flex space-x-4 mt-2">
                            <a href="#" class="text-gray-400 hover:text-white">
                                <Facebook class="w-5 h-5" />
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <Twitter class="w-5 h-5" />
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <Instagram class="w-5 h-5" />
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <Linkedin class="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-8 text-sm text-gray-500">
                © 2025 Almannan charity Foundation. All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'

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
