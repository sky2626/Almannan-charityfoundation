<template>
    <footer class="footer bg-gray-100 p-4">
        <div class="container mx-auto flex justify-between">
            <div class="footer-left">
                <p class="text-gray-600">&copy; {{ new Date().getFullYear() }} Almannan charity Foundation</p>
            </div>
            <div class="footer-center">
                <nav class="flex space-x-4">
                    <NuxtLink to="/" class="text-gray-600 hover:text-gray-800">
                        Home
                    </NuxtLink>
                    <NuxtLink to="/About" class="text-gray-600 hover:text-gray-800">
                        About
                    </NuxtLink>
                    <NuxtLink to="/Contact" class="text-gray-600 hover:text-gray-800">
                        Contact
                    </NuxtLink>
                </nav>
            </div>
            <div class="footer-right">
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <IconsFb />
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <IconsX />
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <IconsLinkedin />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>