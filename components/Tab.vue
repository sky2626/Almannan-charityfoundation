<template>
    <div class="flex flex-col">
        <div class="flex justify-center my-4 ">
            <button v-for="(tab, index) in tabs" :key="index" :class="[
                'py-2 px-4 rounded-lg cursor-pointer',
                activeTab === index ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-600',
                'mr-2'
            ]" @click="activeTab = index">
                {{ tab.name }}
            </button>
        </div>
        <div class="">
            <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index"
                class="p-4 border border-gray-200 rounded-lg ">
                <div v-if="tab.type === 'images'"
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <img v-for="(image, imageIndex) in tab.content" :key="imageIndex" :src="image.src" :alt="image.alt"
                        class="w-64 rounded-lg hover:rounded-sm h-64 object-cover mb-4" @click="showImagePreview(image.src)" />
                </div>
                <!-- Image Preview Modal -->
                <div v-if="imagePreviewSrc"
                    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50"
                    @click="hideImagePreview">
                    <img :src="imagePreviewSrc" alt="Image Preview" class="max-w-4xl max-h-4xl object-contain" />
                </div>
                <div v-else-if="tab.type === 'videos'"
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    <video v-for="(video, videoIndex) in tab.content" :key="videoIndex" :src="video.src"
                        :poster="video.poster" class="w-full h-64 object-cover rounded-md hover:rounded-sm mb-4"
                        controls />
                </div>
                <div v-else>
                    {{ tab.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 0,
            imagePreviewSrc: null,
            tabs: [
                {
                    name: 'Images',
                    type: 'images',
                    content: [
                        { src: 'https://picsum.photos/200/300', alt: 'Image 1' },
                        { src: 'https://picsum.photos/200/301', alt: 'Image 2' },
                        { src: 'https://picsum.photos/200/302', alt: 'Image 3' },
                        { src: 'https://picsum.photos/200/302', alt: 'Image 3' },
                        { src: 'https://picsum.photos/200/302', alt: 'Image 3' },
                        { src: 'https://picsum.photos/200/302', alt: 'Image 3' },
                        { src: 'https://picsum.photos/200/302', alt: 'Image 3' },
                        { src: 'https://picsum.photos/200/302', alt: 'Image 3' },
                    ],
                },
                {
                    name: 'Videos',
                    type: 'videos',
                    content: [
                        { src: 'https://www.w3schools.com/tags/movie.mp4', poster: 'https://www.w3schools.com/tags/poster.jpg' },
                        { src: 'https://www.w3schools.com/tags/movie2.mp4', poster: 'https://www.w3schools.com/tags/poster2.jpg' },
                        { src: 'https://www.w3schools.com/tags/movie.mp4', poster: 'https://www.w3schools.com/tags/poster.jpg' },
                        { src: 'https://www.w3schools.com/tags/movie.mp4', poster: 'https://www.w3schools.com/tags/poster.jpg' },
                        { src: 'https://www.w3schools.com/tags/movie.mp4', poster: 'https://www.w3schools.com/tags/poster.jpg' },
                        { src: 'https://www.w3schools.com/tags/movie.mp4', poster: 'https://www.w3schools.com/tags/poster.jpg' },
                    ],
                },

            ],
            methods: {
                showImagePreview(src) {
                    this.imagePreviewSrc = src;
                },
                hideImagePreview() {
                    this.imagePreviewSrc = null;
                },
            },
        };
    },
};
</script>