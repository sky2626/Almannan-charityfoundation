<template>
    <div class="relative bg-emerald-50">
        <Hero />
        <div class="relative top-[-60px]">
            <Help />
        </div>
        <div class="magicpattern mx-2 py-24">
            <Live />
        </div>
        <div class="py-[100px] px-2 md:px-[260px] bg-emerald-100 ">
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
        <div class="py-[80px] px-2 mx-[8px] flex justify-center ">
            <Newsletter />
        </div>

    </div>

</template>

<style>
.pat {
    background-image: url(/public/pat.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.live {
    background: radial-gradient(circle at top left, transparent 9%, #7ec5a4 10%, #7ec5a4 15%, transparent 16%), radial-gradient(circle at bottom left, transparent 9%, #7ec5a4 10%, #7ec5a4 15%, transparent 16%), radial-gradient(circle at top right, transparent 9%, #7ec5a4 10%, #7ec5a4 15%, transparent 16%), radial-gradient(circle at bottom right, transparent 9%, #7ec5a4 10%, #7ec5a4 15%, transparent 16%), radial-gradient(circle, transparent 25%, #ecfdf5 26%), linear-gradient(0deg, transparent 44%, #7ec5a4 45%, #7ec5a4 55%, transparent 56%), linear-gradient(90deg, transparent 44%, #7ec5a4 45%, #7ec5a4 55%, transparent 56%);
    background-size: 3em 3em;
    background-color: #ecfdf5;
}

.make {
    background: radial-gradient(transparent 34%, #7ec5a4 35%, #7ec5a4 45%, transparent 46%), radial-gradient(circle at left, transparent 39%, #7ec5a480 40%, #7ec5a480 45%, transparent 46%), radial-gradient(circle at right, transparent 39%, #7ec5a480 40%, #7ec5a480 45%, transparent 46%);
    background-size: 3em 3em;
    background-color: #ecfdf5;
    opacity: 1;
}

.heat {
    background: radial-gradient(transparent 34%, #7ec5a4 35%, #7ec5a4 45%, transparent 46%), radial-gradient(circle at left, transparent 39%, #7ec5a480 40%, #7ec5a480 45%, transparent 46%), radial-gradient(circle at right, transparent 39%, #7ec5a480 40%, #7ec5a480 45%, transparent 46%);
    background-size: 6em 6em;
    background-color: #ecfdf5;
    opacity: 1;
}

.roll {
    background: linear-gradient(45deg, #7ec5a4 10%, transparent 11%, transparent 89%, #7ec5a4 90%), linear-gradient(135deg, #7ec5a4 10%, transparent 11%, transparent 89%, #7ec5a4 90%), radial-gradient(circle, transparent 25%, #ecfdf5 26%), linear-gradient(45deg, transparent 46%, #7ec5a4 47%, #7ec5a4 52%, transparent 53%), linear-gradient(135deg, transparent 46%, #7ec5a4 47%, #7ec5a4 52%, transparent 53%);
    background-size: 6em 6em;
    background-color: #ecfdf5;
    opacity: 1
}

.magicpattern {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: repeat;
    background-image: url("data:image/svg+xml;utf8,%3Csvg height=%22auto%22 viewBox=%220 0 2000 1400%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d=%22M0 1386.008c21-8.066 63-26.068 105-40.333 42-14.265 63-1.06 105-30.992 42-29.932 63-95.893 105-118.668 42-22.776 63 18.227 105 4.79 42-13.437 63-60.14 105-71.977 42-11.836 63 36.377 105 12.795 42-23.583 63-88.61 105-130.707 42-42.097 63-52.866 105-79.78s63-16.946 105-54.791c42-37.846 63-121.78 105-134.435 42-12.655 63 114.24 105 71.16 42-43.079 63-235.4 105-286.554 42-51.154 63-23.301 105 30.787 42 54.09 63 196.913 105 239.656 42 42.743 63 79.565 105-25.94s63-446.107 105-501.585c42-55.479 63 172.957 105 224.192 42 51.234 63 99.432 105 31.978 42-67.453 84-295.397 105-369.246L2000 1400H0Z%22 fill=%22%23f2f2a71a%22%2F%3E%3Cpath d=%22M0 1386.008c21-8.066 63-26.068 105-40.333 42-14.265 63-1.06 105-30.992 42-29.932 63-95.893 105-118.668 42-22.776 63 18.227 105 4.79 42-13.437 63-60.14 105-71.977 42-11.836 63 36.377 105 12.795 42-23.583 63-88.61 105-130.707 42-42.097 63-52.866 105-79.78s63-16.946 105-54.791c42-37.846 63-121.78 105-134.435 42-12.655 63 114.24 105 71.16 42-43.079 63-235.4 105-286.554 42-51.154 63-23.301 105 30.787 42 54.09 63 196.913 105 239.656 42 42.743 63 79.565 105-25.94s63-446.107 105-501.585c42-55.479 63 172.957 105 224.192 42 51.234 63 99.432 105 31.978 42-67.453 84-295.397 105-369.246%22 fill=%22none%22 stroke=%22%23f2f2a7%22 stroke-width=%227%22%2F%3E%3Cg fill=%22%23f2f2a7%22%3E%3Ccircle cy=%221386.008%22 r=%2214%22%2F%3E%3Ccircle cx=%22105%22 cy=%221345.675%22 r=%2214%22%2F%3E%3Ccircle cx=%22210%22 cy=%221314.683%22 r=%2214%22%2F%3E%3Ccircle cx=%22315%22 cy=%221196.015%22 r=%2214%22%2F%3E%3Ccircle cx=%22420%22 cy=%221200.805%22 r=%2214%22%2F%3E%3Ccircle cx=%22525%22 cy=%221128.828%22 r=%2214%22%2F%3E%3Ccircle cx=%22630%22 cy=%221141.623%22 r=%2214%22%2F%3E%3Ccircle cx=%22735%22 cy=%221010.916%22 r=%2214%22%2F%3E%3Ccircle cx=%22840%22 cy=%22931.136%22 r=%2214%22%2F%3E%3Ccircle cx=%22945%22 cy=%22876.345%22 r=%2214%22%2F%3E%3Ccircle cx=%221050%22 cy=%22741.91%22 r=%2214%22%2F%3E%3Ccircle cx=%221155%22 cy=%22813.07%22 r=%2214%22%2F%3E%3Ccircle cx=%221260%22 cy=%22526.516%22 r=%2214%22%2F%3E%3Ccircle cx=%221365%22 cy=%22557.303%22 r=%2214%22%2F%3E%3Ccircle cx=%221470%22 cy=%22796.959%22 r=%2214%22%2F%3E%3Ccircle cx=%221575%22 cy=%22771.019%22 r=%2214%22%2F%3E%3Ccircle cx=%221680%22 cy=%22269.434%22 r=%2214%22%2F%3E%3Ccircle cx=%221785%22 cy=%22493.626%22 r=%2214%22%2F%3E%3Ccircle cx=%221890%22 cy=%22525.604%22 r=%2214%22%2F%3E%3Ccircle cx=%221995%22 cy=%22156.358%22 r=%2214%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
</style>
