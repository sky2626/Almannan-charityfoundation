<script setup>
import { ArrowUpRight, ArrowLeft, ArrowRight, X, Expand } from 'lucide-vue-next'
import { photos } from '~/utils/media'
const props = defineProps({ full: Boolean })
const limit = ref(12)
const visiblePhotos = computed(() => photos.slice(0, props.full ? limit.value : 6))
const activeIndex = ref(0)
const dialog = ref(null)
const selected = computed(() => photos[activeIndex.value])
function openPhoto(index) { activeIndex.value = index; dialog.value.showModal(); document.body.style.overflow = 'hidden' }
function restoreScroll() { document.body.style.overflow = '' }
function closePhoto() { dialog.value.close(); restoreScroll() }
function step(direction) { activeIndex.value = (activeIndex.value + direction + photos.length) % photos.length }
onBeforeUnmount(restoreScroll)
</script>
<template>
  <section id="gallery" class="gallery-section"><div class="site-container"><div class="section-heading"><div><p class="eyebrow">Our community, in focus</p><h2>Every picture has a story.</h2></div><NuxtLink v-if="!full" to="/gallery" class="text-link">View all {{ photos.length }} photos <ArrowUpRight :size="18" /></NuxtLink><span v-else class="media-count">{{ photos.length }} moments of connection</span></div><p class="section-description">A glimpse of the people, places, and shared moments that bring our mission to life.</p>
    <div class="photo-grid"><button v-for="(photo, index) in visiblePhotos" :key="photo.id" class="photo-card" :aria-label="`Enlarge ${photo.title}`" @click="openPhoto(index)"><img :src="photo.src" :alt="photo.alt" loading="lazy" decoding="async" /><span class="photo-overlay"><span>{{ photo.title }}</span><Expand :size="18" /></span></button></div>
    <div v-if="full && limit < photos.length" class="load-more"><button class="outline-button" @click="limit += 12">Show more photos <span>{{ Math.min(limit, photos.length) }} / {{ photos.length }}</span></button></div>
  </div>
  <dialog ref="dialog" class="photo-dialog" aria-label="Outreach photo preview" @close="restoreScroll" @click="($event.target === dialog) && closePhoto()" @keydown.left.prevent="step(-1)" @keydown.right.prevent="step(1)"><button class="dialog-close" aria-label="Close photo preview" autofocus @click="closePhoto"><X /></button><div class="dialog-content"><img :src="selected.src" :alt="selected.alt" /><div class="dialog-toolbar"><button aria-label="Previous photo" @click="step(-1)"><ArrowLeft /></button><p>{{ selected.title }} <span>{{ activeIndex + 1 }} / {{ photos.length }}</span></p><button aria-label="Next photo" @click="step(1)"><ArrowRight /></button></div></div></dialog>
  </section>
</template>
