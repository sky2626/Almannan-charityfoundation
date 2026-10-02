<script setup>
import { ArrowUpRight, ArrowDown, Droplets, GraduationCap, HeartPulse, Play } from 'lucide-vue-next'
import { photos } from '~/utils/media'

useHead({
  title: 'Our Work | Almannan Charity Foundation',
  meta: [{ name: 'description', content: 'Explore Almannan Charity Foundation’s projects and programs supporting essential needs, education, health, skills, and stronger communities.' }],
})

const projects = [
  { title: 'Community Water Well', category: 'Basic needs', description: 'Built a clean water well to provide safe drinking water for over 500 villagers.', icon: Droplets, number: '01' },
  { title: 'School Supplies Distribution', category: 'Education', description: 'Provided books, uniforms, and learning materials to over 200 students.', icon: GraduationCap, number: '02' },
  { title: 'Free Medical Outreach', category: 'Health & wellbeing', description: 'Organized free health checkups and provided essential medicines.', icon: HeartPulse, number: '03' },
]
const journalPhotos = [photos[3], photos[4], photos[5]]
</script>

<template>
  <div class="work-page">
    <section class="site-container work-hero">
      <div class="work-heading"><div><p class="eyebrow"><span class="little-dot"></span> Our work</p><h1>Small acts.<br /><em>Meaningful change.</em></h1></div><div class="work-introduction"><p>From everyday essentials to opportunities for a brighter future, our work is about showing up for people — with care, dignity, and practical support.</p><a href="#our-projects" class="text-link">Explore our projects <ArrowDown :size="17" /></a></div></div>
      <figure class="work-cover"><img :src="photos[0].src" alt="Almannan Charity Foundation volunteers and community members together at an outreach event" width="1600" height="900" fetchpriority="high" /><figcaption><span class="cover-kicker">COMPASSION IN ACTION</span><span>People at the centre.<br />Community at the heart.</span><NuxtLink to="/gallery?view=videos"><span class="cover-play"><Play :size="17" fill="currentColor" /></span> Watch our outreach</NuxtLink></figcaption></figure>
      <div class="work-principles"><span>Essential needs.</span><span>Equal opportunity.</span><span>Stronger communities.</span></div>
    </section>

    <section id="our-projects" class="site-container projects-section">
      <div class="section-heading"><div><p class="eyebrow">Practical support, real purpose</p><h2>Our projects in the community.</h2></div><NuxtLink to="/contact" class="text-link">Support a project <ArrowUpRight :size="18" /></NuxtLink></div>
      <p class="section-description">A look at the initiatives we have undertaken to meet essential needs and create opportunity.</p>
      <div class="project-grid"><article v-for="project in projects" :key="project.title" class="project-card"><div class="project-illustration"><component :is="project.icon" :size="56" stroke-width="1.1" /><span>{{ project.number }}</span></div><div class="project-content"><p class="eyebrow">{{ project.category }}</p><h3>{{ project.title }}</h3><p>{{ project.description }}</p></div></article></div>
    </section>

    <Programs :show-link="false" />

    <section class="site-container work-journal">
      <div class="section-heading"><div><p class="eyebrow">From the field</p><h2>See the moments behind the mission.</h2></div><NuxtLink to="/gallery" class="text-link">Explore the gallery <ArrowUpRight :size="18" /></NuxtLink></div>
      <p class="section-description">Photos from our outreach, shared by the people bringing our work to life.</p>
      <div class="journal-grid"><NuxtLink v-for="(photo, index) in journalPhotos" :key="photo.id" to="/gallery" :aria-label="`Explore the outreach gallery, photograph ${index + 1}`"><img :src="photo.src" :alt="photo.alt" loading="lazy" width="700" height="600" /><span>Outreach moments <ArrowUpRight :size="18" /></span></NuxtLink></div>
    </section>

    <PageInvitation eyebrow="Help the next act of kindness happen" title="Good work grows when we do it together." description="Support our programs, share your skills, or lend a helping hand. Your contribution can make a difference." />
  </div>
</template>

<style scoped>
.work-page h1 { font:400 clamp(44px,5vw,67px)/1.08 Georgia,serif; letter-spacing:-.045em; }
.work-page h2,.work-page :deep(.program-section h2) { font:400 clamp(30px,3.3vw,44px)/1.18 Georgia,serif; letter-spacing:-.035em; }
.work-hero { padding-top:64px; }
.work-heading { display:grid; grid-template-columns:1.1fr 1fr; align-items:end; gap:70px; margin-bottom:38px; }
.work-introduction { padding-bottom:5px; }
.work-introduction>p { max-width:455px; font-size:14px; line-height:1.9; color:var(--soft); margin-bottom:23px; }
.work-cover { position:relative; height:410px; border-radius:10px; overflow:hidden; background:#e3e7dc; }
.work-cover>img { width:100%; height:100%; object-fit:cover; object-position:center 44%; }
.work-cover figcaption { position:absolute; inset:0; display:flex; flex-direction:column; justify-content:end; align-items:start; padding:34px; color:white; background:linear-gradient(transparent 30%,#092a22d9); }
.cover-kicker { font-size:9px; letter-spacing:.18em; margin-bottom:13px; color:#dfe8bf; }
.work-cover figcaption>span:nth-child(2) { font:400 33px/1.15 Georgia,serif; letter-spacing:-.025em; }
.work-cover figcaption>a { position:absolute; right:34px; bottom:38px; display:flex; align-items:center; gap:12px; font-size:12px; }
.cover-play { display:grid; place-items:center; width:42px; height:42px; border:1px solid #ffffff8c; border-radius:50%; }
.work-principles { display:flex; justify-content:space-around; gap:20px; border-bottom:1px solid var(--line); padding-block:25px; color:#6d7a5e; font-size:11px; }
.projects-section { padding-block:76px; }
.project-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; }
.project-card { border:1px solid #dce2d4; border-radius:9px; overflow:hidden; background:#fffef9; }
.project-illustration { height:150px; background:#e7eddf; display:flex; align-items:center; justify-content:center; position:relative; color:#4e6b55; }
.project-illustration>span { position:absolute; right:20px; top:18px; font-size:10px; color:#738369; }
.project-card:nth-child(2) .project-illustration { background:#efe7d8; color:#8b7046; }
.project-card:nth-child(3) .project-illustration { background:#e1e9e3; color:#4b7266; }
.project-content { padding:27px; }
.project-content .eyebrow { font-size:9px; letter-spacing:.12em; margin-bottom:13px; color:#6c7d57; }
.project-content h3 { font:400 27px/1.2 Georgia,serif; letter-spacing:-.025em; margin-bottom:17px; }
.project-content>p:last-child { font-size:13px; line-height:1.9; color:var(--soft); }
.work-journal { padding-block:75px; }
.journal-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
.journal-grid>a { position:relative; display:block; aspect-ratio:1.15; border-radius:8px; overflow:hidden; background:#e3e7dc; }
.journal-grid img { height:100%; width:100%; object-fit:cover; transition:transform .4s; }
.journal-grid a:hover img { transform:scale(1.04); }
.journal-grid a>span { position:absolute; inset:55% 0 0; display:flex; align-items:end; justify-content:space-between; padding:21px; color:white; background:linear-gradient(transparent,#122e24bd); font-size:11px; }
@media(max-width:1100px) { .work-heading { gap:40px; } .project-content { padding:23px; } .project-content h3 { font-size:25px; } }
@media(max-width:760px) { .work-hero { padding-top:44px; } .work-heading { grid-template-columns:1fr; gap:23px; margin-bottom:27px; } .work-page h1 { font-size:48px; } .work-cover { height:360px; } .work-cover figcaption { padding:23px; } .work-cover figcaption>span:nth-child(2) { font-size:29px; } .work-cover figcaption>a { position:static; margin-top:20px; font-size:11px; } .work-principles { gap:12px; font-size:9px; text-align:center; line-height:1.6; } .projects-section,.work-journal { padding-block:50px; } .project-grid { grid-template-columns:1fr; gap:18px; } .project-illustration { height:135px; } .project-content { padding:26px; } .project-content h3 { font-size:28px; } .journal-grid { grid-template-columns:1fr; gap:15px; } .journal-grid>a { aspect-ratio:1.45; } }
</style>
