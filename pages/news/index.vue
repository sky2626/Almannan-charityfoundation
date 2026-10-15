<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { stories } from '~/utils/stories'
import StoryCard from '~/components/StoryCard.vue'
const category = ref('All stories')
const categories = ['All stories', ...new Set(stories.map(story => story.category))]
const visibleStories = computed(() => category.value === 'All stories' ? stories : stories.filter(story => story.category === category.value))
useHead({ title: 'News & Stories | Almannan Charity Foundation', meta: [{ name: 'description', content: 'Stories from Almannan Charity Foundation: discover our community, explore our work, and find ways to volunteer.' }] })
</script>

<template>
  <div class="news-page">
    <section class="site-container news-heading"><p class="eyebrow"><span class="little-dot"></span> News & stories</p><h1>Stories of kindness.<br /><em>Reasons for hope.</em></h1><p>Meet our community, explore what drives us, and find your own way to make a difference.</p></section>
    <section class="site-container news-list" aria-label="Foundation stories">
      <div class="news-filters" role="group" aria-label="Filter stories by topic"><button v-for="topic in categories" :key="topic" :aria-pressed="category === topic" :class="{ active: category === topic }" @click="category = topic">{{ topic }}</button></div>
      <p class="news-count" role="status">{{ visibleStories.length }} {{ visibleStories.length === 1 ? 'story' : 'stories' }} · {{ category }}</p>
      <div class="news-grid"><StoryCard v-for="story in visibleStories" :key="story.slug" :story="story" /></div>
    </section>
    <section class="news-invitation"><div class="site-container"><div><p class="eyebrow">Join the next chapter</p><h2>Your kindness has a place here.</h2><p>Share your time and skills with our community.</p></div><NuxtLink to="/volunteer" class="action-button">Become a volunteer <ArrowUpRight :size="17" /></NuxtLink></div></section>
  </div>
</template>

<style scoped>
.news-heading { padding-block:66px 38px; }
.news-heading h1 { font:400 clamp(43px,4.8vw,65px)/1.1 Georgia,serif; letter-spacing:-.045em; }
.news-heading>p:last-child { max-width:540px; margin-top:24px; font-size:15px; color:var(--soft); line-height:1.9; }
.news-list { padding-bottom:80px; }
.news-filters { display:flex; flex-wrap:wrap; gap:10px; padding-block:23px; border-top:1px solid var(--line); border-bottom:1px solid var(--line); }
.news-filters button { padding:11px 19px; border:1px solid #d8dfcf; border-radius:6px; font-size:12px; background:transparent; }
.news-filters button:hover { background:#e8eddf; }
.news-filters button.active { color:white; background:var(--forest); border-color:var(--forest); }
.news-count { font-size:11px; color:var(--soft); margin-block:24px; }
.news-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; }
.news-invitation { background:#e2e9ce; padding-block:55px; }
.news-invitation>.site-container { display:flex; align-items:center; justify-content:space-between; gap:35px; }
.news-invitation h2 { font:400 clamp(30px,3vw,41px)/1.2 Georgia,serif; letter-spacing:-.03em; }
.news-invitation p:not(.eyebrow) { font-size:13px; color:var(--soft); line-height:1.8; margin-top:16px; }
@media(max-width:760px) { .news-heading { padding-block:44px 30px; } .news-grid { grid-template-columns:1fr; gap:20px; } .news-list { padding-bottom:50px; } .news-filters button { padding:10px 14px; } .news-invitation>.site-container { flex-direction:column; align-items:start; gap:25px; } }
</style>
