<script setup>
import { ArrowUpRight, Heart } from 'lucide-vue-next'
defineProps({ eyebrow: String, title: String, description: String })
</script>

<template>
  <section class="page-invitation">
    <div class="site-container invitation-inner">
      <div><p class="eyebrow">{{ eyebrow }}</p><h2>{{ title }}</h2><p class="invitation-description">{{ description }}</p></div>
      <div class="invitation-actions"><NuxtLink to="/volunteer" class="action-button">Become a volunteer <ArrowUpRight :size="17" /></NuxtLink><NuxtLink to="/#target-section" class="text-link"><Heart :size="16" /> Make a donation</NuxtLink></div>
    </div>
  </section>
</template>

<style scoped>
.page-invitation { background:#e2e9ce; padding-block:62px; }
.invitation-inner { display:flex; justify-content:space-between; align-items:center; gap:45px; }
.page-invitation h2 { font:400 clamp(30px,3vw,41px)/1.2 Georgia,serif; letter-spacing:-.035em; max-width:660px; }
.page-invitation .eyebrow { margin-bottom:15px; }
.invitation-description { font-size:13px; color:#54644c; line-height:1.9; max-width:550px; margin-top:17px; }
.invitation-actions { display:flex; flex-direction:column; align-items:center; gap:20px; flex-shrink:0; }
@media(max-width:760px) { .page-invitation { padding-block:48px; } .invitation-inner { flex-direction:column; align-items:start; gap:28px; } .invitation-actions { align-items:start; } }
</style>
