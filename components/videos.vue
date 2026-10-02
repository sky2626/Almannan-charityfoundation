<script setup>
import { ArrowUpRight, Film } from 'lucide-vue-next'
import { videos } from '~/utils/media'
const props = defineProps({ full: Boolean })
const visibleVideos = computed(() => props.full ? videos : videos.slice(0, 3))
const videoElements = ref([])
function pauseOthers(event) { videoElements.value.forEach(video => { if (video !== event.target) video.pause() }) }
onBeforeUnmount(() => videoElements.value.forEach(video => video.pause()))
</script>
<template><section id="videos" class="video-section"><div class="site-container"><div class="section-heading"><div><p class="eyebrow">Stories in motion</p><h2>A closer look at our work.</h2></div><NuxtLink v-if="!full" to="/gallery?view=videos" class="text-link">Watch all {{ videos.length }} videos <ArrowUpRight :size="18" /></NuxtLink><span v-else class="media-count">{{ videos.length }} videos from the field</span></div><p class="section-description">Watch moments from our outreach, captured and shared by our team.</p><div class="video-grid"><article v-for="video in visibleVideos" :key="video.id" class="video-card"><video ref="videoElements" :src="video.src" controls playsinline preload="metadata" :aria-label="video.title" @play="pauseOthers">Your browser does not support video playback. <a :href="video.src">Download this video</a>.</video><div class="video-caption"><span class="film-icon"><Film :size="18" /></span><div><h3>{{ video.title }}</h3><p>Almannan Charity Foundation</p></div><span class="video-type">VIDEO</span></div></article></div></div></section></template>
