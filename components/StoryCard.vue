<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { readingTime, type Story } from '~/utils/stories'
defineProps<{ story: Story }>()
</script>

<template>
  <article class="story-card">
    <NuxtLink :to="`/news/${story.slug}`" class="story-card-link">
      <div class="story-card-image"><img :src="story.image" :alt="story.imageAlt" width="800" height="600" loading="lazy" /></div>
      <div class="story-card-content">
        <div class="story-meta"><span>{{ story.category }}</span><span>{{ readingTime(story) }}</span></div>
        <h3>{{ story.title }}</h3>
        <p>{{ story.excerpt }}</p>
        <span class="story-read">Read story <ArrowUpRight :size="17" /></span>
      </div>
    </NuxtLink>
  </article>
</template>

<style scoped>
.story-card { min-width:0; border:1px solid #dfe4d7; border-radius:10px; overflow:hidden; background:#fffef9; }
.story-card-link { display:flex; flex-direction:column; height:100%; }
.story-card-image { aspect-ratio:1.5; overflow:hidden; background:#e5e9dd; }
.story-card-image img { width:100%; height:100%; object-fit:cover; transition:transform .4s; }
.story-card-link:hover img { transform:scale(1.035); }
.story-card-content { padding:26px; display:flex; flex-direction:column; flex:1; }
.story-meta { display:flex; align-items:center; justify-content:space-between; gap:10px; font-size:10px; color:#68784f; margin-bottom:17px; }
.story-meta>span:first-child { text-transform:uppercase; letter-spacing:.09em; font-weight:600; }
.story-meta>span:last-child { color:var(--soft); white-space:nowrap; }
.story-card h3 { font:400 27px/1.22 Georgia,serif; letter-spacing:-.025em; margin-bottom:15px; }
.story-card p { font-size:13px; line-height:1.85; color:var(--soft); margin-bottom:25px; }
.story-read { display:flex; align-items:center; justify-content:space-between; border-top:1px solid var(--line); padding-top:18px; margin-top:auto; font-size:12px; font-weight:600; }
@media(max-width:760px) { .story-card-content { padding:23px; } .story-card h3 { font-size:26px; } }
</style>
