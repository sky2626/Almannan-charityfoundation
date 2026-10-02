<script setup>
import { ArrowUpRight, Play, Heart } from 'lucide-vue-next'
import { photos } from '~/utils/media'
</script>
<template>
  <section class="home-hero">
    <div class="site-container hero-grid">
      <div class="hero-copy"><p class="eyebrow"><span class="little-dot"></span> Compassion in action</p><h1>A little kindness.<br />A world of <em>difference.</em></h1><p class="hero-description">Everyone deserves care, dignity, and a chance to thrive. Together, we bring food, essential support, and hope to the people who need it most.</p>
        <div class="hero-actions"><NuxtLink to="/#target-section" class="action-button">Make a difference <ArrowUpRight :size="18" /></NuxtLink><NuxtLink to="/gallery?view=videos" class="watch-link"><span><Play :size="15" fill="currentColor" /></span> See our work</NuxtLink></div>
        <div class="hero-note"><Heart :size="19" /><span>Rooted in compassion. United by community.</span></div>
      </div>
      <div class="hero-visual"><div class="hero-image-frame"><img :src="photos[0].src" alt="Almannan Charity Foundation volunteers and community members gathered at an outreach event" fetchpriority="high" /><span class="image-label"><span class="little-dot"></span> Real people. Real connections.</span></div><div class="kindness-note"><span class="note-heart"><Heart :size="25" /></span><div><strong>Hope starts with us.</strong><span>One community. One act at a time.</span></div></div><span class="hero-spark" aria-hidden="true">✳</span></div>
    </div>
    <div class="values-strip site-container"><span>People at the heart of everything.</span><span><Heart :size="17" /> Compassion</span><span>✳ Community</span><span>↗ Lasting hope</span></div>
  </section>
</template>
