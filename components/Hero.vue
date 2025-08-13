<template>
    <section class="relative bg-gradient-to-br from-yellow-50 via-green-50 to-red-50">
        <!-- Background overlay -->
        <div class="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center opacity-20"></div>

        <div class="relative max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
            <!-- Left Content -->
            <div class="flex-1 text-center lg:text-left space-y-6">
                <h1 class="text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                    Together, We Can <span class="text-green-600">Change Lives</span>
                </h1>
                <p class="text-lg text-gray-600 max-w-xl">
                    Our mission is simple — to bring hope to the poor, feed the hungry, and provide basic needs to those
                    in crisis.
                </p>
                <div class="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg" onclick="document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });">
                        Donate Now
                    </Button>
                    <Button variant="outline"
                        class="px-6 py-3 rounded-xl border-green-600 text-green-600 hover:bg-green-50">
                        Learn More
                    </Button>
                </div>
            </div>

            <!-- Right Image -->
            <div class="flex-1">
                <div class="relative">
                    <img src="/2.jpeg" alt="Helping Hands"
                        class="rounded-2xl shadow-xl border-4 border-white" />
                    <div class="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4 max-w-[250px]">
                        <p class="text-sm text-gray-600">Your support helps us deliver food, shelter, and hope to those
                            who need it most.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>
