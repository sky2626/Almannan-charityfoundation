<template>
    <nav class="navbar bg-white border-b">
        <div class="container mx-auto flex items-center justify-between">
            <div class="navbar-brand">
                <a href="#" class="text-xl font-bold">Your Brand</a>
            </div>
            <div class="navbar-menu md:hidden">
                <button @click="toggleMenu" class="navbar-burger flex items-center">
                    <span class="navbar-burger-bar"></span>
                    <span class="navbar-burger-bar"></span>
                    <span class="navbar-burger-bar"></span>
                </button>
            </div>
            <div class="navbar-menu hidden md:block md:flex md:items-center md:justify-center">
                <NuxtLink to="/" class="navbar-item mx-2 text-blue-500 hover:text-blue-300" >Home</NuxtLink>
                <NuxtLink to="/About" class="navbar-item mx-2 text-blue-500 hover:text-blue-300" >About</NuxtLink>
                <NuxtLink to="/Contact" class="navbar-item mx-2 text-blue-500 hover:text-blue-300" >Contact</NuxtLink>
                <NuxtLink to="/Gallery" class="navbar-item mx-2 text-blue-500 hover:text-blue-300" >Gallery</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
.navbar-burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    width: 24px;
}

.navbar-burger-bar {
    width: 24px;
    height: 2px;
    background-color: #333;
    transition: transform 0.3s ease-in-out;
}

.navbar-menu.is-active .navbar-burger-bar:nth-child(1) {
    transform: rotate(45deg);
}

.navbar-menu.is-active .navbar-burger-bar:nth-child(2) {
    opacity: 0;
}

.navbar-menu.is-active .navbar-burger-bar:nth-child(3) {
    transform: rotate(-45deg);
}
</style>