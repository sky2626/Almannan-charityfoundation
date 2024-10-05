<template>
    <form action="https://formsubmit.co/alhassansalu1@gmail.com" method="POST" class="max-w-md shadow-2xl shadow-blue-100 px-6 py-10 border-t-8 rounded-xl border-t-blue-300">
        <div class="grid md:grid-cols-2 md:gap-4 mb-4">
            <div>
                <label for="base-input" class="block mb-2 text-sm font-medium text-blue-300">First Name</label>
                <input type="text" id="base-input" required
                    class="bg-transparent border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block active:border-blue-300 ring-blue-300 w-full p-2.5 ">
            </div>
            <div>
                <label for="base-input" class="block mb-2 text-sm font-medium text-blue-300">Last Name</label>
                <input type="text" id="base-input" required
                    class="bg-transparent border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block active:border-blue-300 ring-blue-300 w-full p-2.5 ">
            </div>
        </div>
        <div class="mb-4">
            <label for="base-input" class="block mb-2 text-sm font-medium text-blue-300">Email</label>
            <input type="mail" id="base-input" required
                class="bg-transparent border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block active:border-blue-300 ring-blue-300 w-full p-2.5 ">
        </div>
        <div class="mb-4">
            <label for="large-input" class="block mb-2 text-sm font-medium text-blue-300" required>How can we help
                you?</label>
            <input type="text" id="large-input" required
                class="block w-full p-4 text-gray-900 border border-blue-300 rounded-lg bg-transparent text-base focus:ring-blue-300 focus:border-blue-300" />
        </div>
        <button type="submit"
            class="text-white bg-blue-700 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
</template>


