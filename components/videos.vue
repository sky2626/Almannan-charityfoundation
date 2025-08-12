<template>
    <section class="py-24 max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Watch Our Facebook Videos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(video, idx) in videos" :key="idx" class="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe :src="getEmbedUrl(video)" width="100%" height="100%" style="border:none;overflow:hidden"
                    scrolling="no" frameborder="0" allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    </section>
</template>

<script setup>
const videos = [
    // Paste your Facebook video URLs here
    'https://www.facebook.com/reel/1412013890104577/',
    "https://www.facebook.com/reel/3763754627193050/",
    "https://www.facebook.com/100009851740932/videos/758804940180296/",
    "https://www.facebook.com/reel/1101767921758189/",
    "https://www.facebook.com/watch/?ref=search&v=865012962504761&external_log_id=ab18d9e8-67ce-497c-b24b-e8b95e28646d&q=almannan%20charity%20foundation",
    "https://www.facebook.com/watch/?ref=search&v=607933570234071&external_log_id=ab18d9e8-67ce-497c-b24b-e8b95e28646d&q=almannan%20charity%20foundation",
]

function getEmbedUrl(videoUrl) {
    // Encode the URL and build embed URL for iframe
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=0&width=560`
}
</script>

<style scoped>
.aspect-video {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* 16:9 ratio */
    height: 0;
}

.aspect-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
