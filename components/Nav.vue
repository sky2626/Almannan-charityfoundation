<template>
    <header class="w-full border-b bg-white shadow-sm">
        <div class="container mx-auto flex items-center justify-between p-4">
            <!-- Logo and Name -->
            <NuxtLink to="/" class="flex items-center gap-2">
                <img src="/pat.svg" alt="NGO Logo" class="h-8 w-8 rounded-full" />
                <span class="font-bold text-xl text-green-800">Hope for All</span>
            </NuxtLink>

            <!-- Desktop Menu -->
            <nav class="hidden md:flex items-center gap-6">
                <NuxtLink v-for="link in links" :key="link.name" :to="link.to"
                    class="text-foreground hover:text-green-600 font-medium">
                    {{ link.name }}
                </NuxtLink>
                <Button class="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg">
                    Donate
                </Button>
            </nav>

            <!-- Mobile Menu Button -->
            <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-lg hover:bg-green-100 text-foreground">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="fade">
            <div v-if="isOpen" class="md:hidden bg-white shadow-lg border-t">
                <div class="flex flex-col p-4 gap-4">
                    <NuxtLink v-for="link in links" :key="link.name" :to="link.to"
                        class="hover:text-green-600 font-medium text-foreground" @click="isOpen = false">
                        {{ link.name }}
                    </NuxtLink>
                    <Button class="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg w-full">
                        Donate
                    </Button>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button"; // shadcn UI button

const isOpen = ref(false);
const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Volunteer", to: "/volunteer" },
    { name: "Contact", to: "/contact" },
];
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
