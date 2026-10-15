<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { stories } from '~/utils/stories'
import StoryCard from '~/components/StoryCard.vue'
</script>

<template>
  <section class="news-preview site-container" aria-labelledby="news-preview-title">
    <div class="section-heading"><div><p class="eyebrow">News & stories</p><h2 id="news-preview-title">The people. The purpose. The stories.</h2></div><NuxtLink to="/news" class="text-link">Explore all stories <ArrowUpRight :size="18" /></NuxtLink></div>
    <p class="section-description">Get closer to our community and discover ways to be part of our work.</p>
    <div class="news-grid"><StoryCard v-for="story in stories.slice(0, 3)" :key="story.slug" :story="story" /></div>
  </section>
</template>

<style scoped>
.news-preview { padding-block:75px; }
.news-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; }
@media(max-width:760px) { .news-preview { padding-block:50px; } .news-grid { grid-template-columns:1fr; gap:20px; } }
</style>
