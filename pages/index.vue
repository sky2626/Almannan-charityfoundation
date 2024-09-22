<template>
    <div class="relative bg-emerald-50">
        <Hero />
        <div class="relative top-[-60px]">
            <Help />
        </div>
        <div class="mx-2 my-24">
            <Live />
        </div>
        <div class="py-[100px] px-2 md:px-[260px] bg-emerald-100">
            <h1 class=" text-lg text-blue-300 text-center">- Campaingns</h1>
            <h1 class="font-bold text-2xl text-blue-300 text-center">Featured Campaign</h1>
            <p class="text-gray-600 text-center mb-6">we have be changing people in so many ways</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                <Card imageUrl="https://cdn.pixabay.com/photo/2016/01/14/02/48/girl-1139277_1280.jpg"
                    title="Card Title 1" description="Card Description 1" />
                <Card imageUrl="https://cdn.pixabay.com/photo/2016/01/14/02/48/girl-1139277_1280.jpg"
                    title="Card Title 2" description="Card Description 2" />
                <Card imageUrl="https://cdn.pixabay.com/photo/2016/01/14/02/48/girl-1139277_1280.jpg"
                    title="Card Title 3" description="Card Description 3" />
            </div>
        </div>
        <div class="bg-image py-[80px] px-2 mx-[8px] flex justify-center rounded-2xl">
            <Newsletter />
        </div>
        <div>
            <Mainfooter />
        </div>
    </div>

</template>

<style scoped>
.bg-image {
    background-image: url(https://cdn.pixabay.com/photo/2017/12/22/07/54/portrait-3033181_1280.jpg); 
    background-size: cover;
    background-repeat: no-repeat;
}
</style>