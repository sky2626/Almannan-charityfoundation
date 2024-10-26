<template>
    <nav class="flex justify-between items-center py-4 md:py-6">
        <!-- Mobile toggle button -->
        <button @click="toggleMobileMenu"
            class="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-gray-700 hover:border-gray-700">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>

        <!-- Desktop navigation -->
        <ul :class="{ 'hidden': mobile }"
            class="md:flex md:items-center md:w-auto w-full md:py-0 py-4 md:pl-0 pl-4 md:pr-0 pr-4 md:text-lg text-sm  bg-gray-200 md:shadow-none shadow-md">
            <li v-for="item in navigationItems" :key="item.id" class="md:mr-4">
                <router-link :to="item.link"
                    class="block text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>

        <!-- Mobile navigation -->
        <ul :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
            class="md:hidden flex flex-col items-center w-full bg-gray-200 shadow-md py-4">
            <li v-for="item in navigationItems" :key="item.id" class="w-full">
                <router-link :to="item.link"
                    class="block text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out py-2 px-4">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    Name: 'navigationBar',
    data() {
        return {
            mobile: window.innerWidth < 768,
            mobileMenuOpen: false,
            navigationItems: [
                {
                    id: 1,
                    title: 'Home',
                    link: '/'
                },
                {
                    id: 2,
                    title: 'About',
                    link: '/about'
                },
                {
                    id: 4,
                    title: 'Contact',
                    link: '/contact'
                },
                {
                    id: 5,
                    title: 'Gallery',
                    link: '/gallery'
                },
            ],
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        handleResize() {
            this.mobile = window.innerWidth < 768;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>