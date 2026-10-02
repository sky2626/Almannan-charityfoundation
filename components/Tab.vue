<script setup>
import { Camera, Film } from 'lucide-vue-next'
import { photos, videos } from '~/utils/media'
const route = useRoute()
const showVideos = computed(() => route.query.view === 'videos')
</script>
<template><div><section class="gallery-page-intro site-container"><p class="eyebrow">The Almannan journal</p><h1>Moments that <em>matter.</em></h1><p>Meet our community through the photos and videos of our work together.</p><nav class="media-tabs" aria-label="Choose gallery media"><NuxtLink to="/gallery" :class="{ active: !showVideos }" :aria-current="!showVideos ? 'page' : undefined"><Camera :size="18" /> Photographs <span>{{ photos.length }}</span></NuxtLink><NuxtLink to="/gallery?view=videos" :class="{ active: showVideos }" :aria-current="showVideos ? 'page' : undefined"><Film :size="18" /> Videos <span>{{ videos.length }}</span></NuxtLink></nav></section><Videos v-if="showVideos" full /><Gallery v-else full /></div></template>
