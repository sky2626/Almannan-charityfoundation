<template>
    <footer class="footer">
        <nav class="flex justify-center space-x-4 bg-gray-800 py-2">
            <NuxtLink to="/" class="text-gray-600 hover:text-gray-400">
                Home
            </NuxtLink>
            <NuxtLink to="/About" class="text-gray-600 hover:text-gray-400">
                About
            </NuxtLink>
            <NuxtLink to="/Contact" class="text-gray-600 hover:text-gray-400">
                Contact
            </NuxtLink>
            <NuxtLink to="/Gallery" class="text-gray-600 hover:text-gray-400">
                Gallery
            </NuxtLink>
        </nav>
        <div class="bg-gray-900 flex justify-center items-center flex-col p-4">
            <div class="container mx-auto flex justify-between">
            <div class="footer-left">
                <p class="text-gray-600">&copy; {{ new Date().getFullYear() }} Almannan charity Foundation</p>
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
        </div>
        
    </footer>
</template>