<template>
    <nav class="">
        <!-- Desktop navigation -->
        <div class="md:flex md:justify-center md:items-center pacifico-font hidden">
            <div class=" flex items-center justify-between w-full bg-white py-4 px-8 shadow-lg shadow-[#471D79]/25">
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/"
                            class="block text-lg  text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about"
                            class="block text-lg text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                            About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact"
                            class="block text-lg text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                            Contact us
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/learn"
                            class="block text-lg text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                            Learn
                        </NuxtLink>
                    </li>
                </ul>
                <img src="/pat.svg" width="40" height="40" alt="logo" class="">
                <NuxtLink to="/Learn"
                    class="flex gap-4 items-center font-semibold justify-center hover:gap-6 text-blue-600 border-blue-600">
                    Start learning
                </NuxtLink>
            </div>

        </div>

        <!-- Mobile menu navigation -->
        <div
            class="bg-white text-blue-600 p-4 flex items-center justify-between md:hidden  shadow-lg shadow-[#471D79]/25">
            <img src="/pat.svg" width="50" height="40" alt="logo" class="">
            <button @click="toggleMenu" class="block md:hidden text-white focus:outline-none">
                <IconsMenu v-if="!menuOpen" class="text-blue-600 font-bold text-2xl" />
                <IconsClose v-else class="text-blue-600 font-bold text-xl" />
            </button>
        </div>
        <div :class="menuOpen ? 'max-h-60' : 'max-h-0'"
            class="w-full md:flex md:items-center md:w-auto overflow-hidden transition-max-height duration-300 ease-in-out">
            <ul class="flex md:hidden flex-col ml-8 mt-4 space-y-4 pacifico-font">
                <li>
                    <NuxtLink to="/"
                        class="block text-lg text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about"
                        class="block text-lg text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                        About
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact"
                        class="block text-lg text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                        contact us
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/learn"
                        class="block text-lg text-blue-600 transition-all duration-300 hover:text-violet-400 focus-within:outline-0 focus-within:text-violet-400">
                        Learn
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>


import { ref } from 'vue';

// State for menu toggle
const menuOpen = ref(false);
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>