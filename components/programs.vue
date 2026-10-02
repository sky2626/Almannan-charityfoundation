<script setup>
defineProps({ showLink: { type: Boolean, default: true } })
import { Utensils, GraduationCap, HeartPulse, House, Wrench, Users, ArrowUpRight } from 'lucide-vue-next'
const programs = [
 { title: 'Food & essentials', text: 'Meals and everyday supplies to help families through difficult times.', icon: Utensils },
 { title: 'Education support', text: 'Helping children access school supplies and opportunities to learn.', icon: GraduationCap },
 { title: 'Health & wellbeing', text: 'Supporting access to care and healthier lives in our communities.', icon: HeartPulse },
 { title: 'Shelter & clothing', text: 'Meeting basic needs with warmth, comfort, and dignity.', icon: House },
 { title: 'Skills & opportunity', text: 'Practical skills that help people build a more independent future.', icon: Wrench },
 { title: 'Community support', text: 'Working together to respond to the needs of our neighbours.', icon: Users },
]
</script>
<template><section class="program-section"><div class="site-container"><div class="section-heading"><div><p class="eyebrow">How we help</p><h2>Care that reaches further.</h2></div><NuxtLink v-if="showLink" to="/projects" class="text-link">Explore our work <ArrowUpRight :size="18" /></NuxtLink></div><div class="program-grid"><article v-for="(program, index) in programs" :key="program.title" class="program-card"><div class="program-top"><component :is="program.icon" :size="24" /><span>0{{ index + 1 }}</span></div><h3>{{ program.title }}</h3><p>{{ program.text }}</p></article></div></div></section></template>
