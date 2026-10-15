<script setup>
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'
import { stories, readingTime } from '~/utils/stories'
import StoryCard from '~/components/StoryCard.vue'
definePageMeta({ key: route => route.fullPath })
const route = useRoute()
const story = stories.find(item => item.slug === route.params.slug)
if (!story) throw createError({ statusCode: 404, statusMessage: 'Story not found', fatal: true })
const related = stories.filter(item => item.slug !== story.slug)
useHead({
  title: `${story.title} | Almannan Charity Foundation`,
  meta: [
    { name: 'description', content: story.excerpt },
    { property: 'og:title', content: story.title },
    { property: 'og:description', content: story.excerpt },
    { property: 'og:type', content: 'article' },
  ],
})
</script>

<template>
  <div class="article-page">
    <article class="site-container">
      <header class="article-heading"><NuxtLink to="/news" class="article-back"><ArrowLeft :size="16" /> All news & stories</NuxtLink><p class="eyebrow">{{ story.category }} <span aria-hidden="true">·</span> {{ readingTime(story) }}</p><h1>{{ story.title }}</h1><p class="article-summary">{{ story.excerpt }}</p><p class="article-byline">Almannan Charity Foundation</p></header>
      <img class="article-cover" :src="story.image" :alt="story.imageAlt" width="1400" height="900" fetchpriority="high" />
      <div class="article-body"><section v-for="section in story.sections" :key="section.heading"><h2>{{ section.heading }}</h2><p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p></section><NuxtLink :to="story.action.to" class="action-button">{{ story.action.label }} <ArrowUpRight :size="17" /></NuxtLink></div>
    </article>
    <section class="related-section"><div class="site-container"><div class="section-heading"><div><p class="eyebrow">Keep exploring</p><h2>More from our community.</h2></div><NuxtLink to="/news" class="text-link">All stories <ArrowUpRight :size="17" /></NuxtLink></div><div class="related-grid"><StoryCard v-for="item in related" :key="item.slug" :story="item" /></div></div></section>
  </div>
</template>

<style scoped>
.article-heading { max-width:850px; margin:auto; padding-block:45px 35px; }
.article-back { display:inline-flex; align-items:center; gap:9px; font-size:12px; margin-bottom:38px; color:var(--soft); }
.article-heading .eyebrow { gap:13px; font-size:9px; }
.article-heading h1 { font:400 clamp(39px,4.7vw,61px)/1.13 Georgia,serif; letter-spacing:-.04em; }
.article-summary { font-size:16px; color:var(--soft); line-height:1.85; max-width:750px; margin-top:23px; }
.article-byline { font-size:11px; color:#6d7b57; margin-top:22px; }
.article-cover { width:100%; max-height:540px; aspect-ratio:2; object-fit:cover; border-radius:10px; }
.article-body { max-width:740px; margin:auto; padding-block:45px 70px; }
.article-body section { margin-bottom:34px; }
.article-body h2,.related-section h2 { font:400 clamp(28px,3vw,37px)/1.2 Georgia,serif; letter-spacing:-.025em; margin-bottom:20px; }
.article-body p { font-size:16px; line-height:1.95; color:#536457; margin-bottom:19px; }
.related-section { background:#edf0e6; padding-block:60px; }
.related-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:24px; margin-top:30px; }
.related-section h2 { margin-bottom:0; }
@media(max-width:760px) { .article-heading { padding-top:30px; } .article-back { margin-bottom:28px; } .article-heading h1 { font-size:39px; } .article-summary { font-size:14px; } .article-cover { aspect-ratio:1.2; } .article-body { padding-block:32px 50px; } .article-body p { font-size:15px; } .related-grid { grid-template-columns:1fr; } .related-section { padding-block:45px; } }
</style>
