<template>
    <div class="flex p-1 flex-col md:flex-row justify-center gap-4 md:gap-0">
        <div class="flex justify-center items-center min-width: content-fit">
            <div class="flex flex-grow: 0">
                <div
                    class="image-container-top rounded-full relative right-[-80px] top-[90px] border-4 border-green-500">
                    <NuxtImg src="https://cdn.pixabay.com/photo/2017/03/14/17/25/street-2143805_960_720.jpg"
                        class="image" />
                </div>
                <div class="image-container rounded-full border-4 border-blue-300">
                    <NuxtImg src="https://cdn.pixabay.com/photo/2017/03/14/17/25/street-2143805_960_720.jpg"
                        class="image" />
                </div>
                <div
                    class="image-container-down rounded-full relative right-[80px] top-[0px] border-4 border-yellow-300">
                    <NuxtImg src="https://cdn.pixabay.com/photo/2017/03/14/17/25/street-2143805_960_720.jpg"
                        class="image" />
                </div>
            </div>
        </div>
        <div class="flex flex-col p-[16px] md:w-[550px]">
            <h1 class="font-bold text-2xl text-blue-300">Changing lives of the less privillage</h1>
            <h3 class="text-xl font-semi-bold text-gray-600">More than two thousand children in Africa are living in
                poorvaty</h3>
            <p class=" text-gray-600">Every individual deserves the opportunity to live a fulfilling life, regardless of
                their circumstances. By
                working together to address the challenges faced by the less privileged, we can create a more equitable
                and
                compassionate society. Let's strive to make a positive impact on the lives of those in need.
            </p>
            <div class="flex flex-row gap-2 mt-4 justify-center items-center md:justify-start md:items-start">
                <NuxtLink to="/Contact">
                    <div class="bg-blue-300 text-gray-800 px-8 py-4 font-semi-bold rounded-r-full rounded-bl-full">
                        Change a live
                    </div>
                </NuxtLink>
                <NuxtLink to="/About">
                    <div class="text-blue-300 px-8 py-4 font-semi-bold rounded-full border-2 border-blue-300">
                        Learn More
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>

</template>

<style scoped>
.image-container {
    width: 250px;
    height: 250px;
    overflow: hidden;
}

.image-container-top {
    width: 130px;
    height: 130px;
    overflow: hidden;
}

.image-container-down {
    width: 100px;
    height: 100px;
    overflow: hidden;
}


.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>