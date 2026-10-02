<script setup>
import { Heart, Menu, X, ArrowUpRight } from 'lucide-vue-next'
const isOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { isOpen.value = false })
const links = [
  { name: 'Home', to: '/' }, { name: 'Our story', to: '/about' },
  { name: 'Our work', to: '/projects' }, { name: 'Gallery', to: '/gallery' },
  { name: 'Videos', to: '/gallery?view=videos' }, { name: 'Contact', to: '/contact' },
]
</script>
<template>
  <header class="site-header">
    <div class="topbar"><div class="site-container"><span>Small acts of kindness. Lasting change.</span><NuxtLink to="/volunteer">Become a volunteer <ArrowUpRight :size="13" /></NuxtLink></div></div>
    <div class="site-container header-inner">
      <NuxtLink to="/" class="brand" aria-label="Almannan Charity Foundation home"><img src="/pat.svg" alt="" /><span>ALMANNAN<small>CHARITY FOUNDATION</small></span></NuxtLink>
      <nav class="desktop-nav" aria-label="Main navigation"><NuxtLink v-for="link in links" :key="link.name" :to="link.to" :class="{ selected: route.fullPath.toLowerCase() === link.to }">{{ link.name }}</NuxtLink></nav>
      <NuxtLink to="/#target-section" class="action-button header-donate"><Heart :size="16" /> Give a little hope</NuxtLink>
      <button class="menu-toggle" :aria-expanded="isOpen" aria-controls="mobile-navigation" :aria-label="isOpen ? 'Close navigation' : 'Open navigation'" @click="isOpen = !isOpen"><X v-if="isOpen" /><Menu v-else /></button>
    </div>
    <nav v-if="isOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation"><NuxtLink v-for="link in links" :key="link.name" :to="link.to" @click="isOpen = false">{{ link.name }}</NuxtLink><NuxtLink to="/#target-section" class="action-button" @click="isOpen = false">Donate now</NuxtLink></nav>
  </header>
</template>
