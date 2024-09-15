<template>
    <footer class="footer bg-gray-100 p-4">
        <div class="container mx-auto flex justify-between">
            <div class="footer-left">
                <p class="text-gray-600">&copy; {{ new Date().getFullYear() }} Your Company</p>
            </div>
            <div class="footer-center">
                <nav class="flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-800">Home</a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">About</a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">Contact</a>
                </nav>
            </div>
            <div class="footer-right">
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-gray-800">
                        <i class="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>