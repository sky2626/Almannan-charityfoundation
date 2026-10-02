<script setup>
import { ArrowUpRight, Heart, Sprout, Users, Compass, Eye } from 'lucide-vue-next'
import { photos } from '~/utils/media'

useHead({
  title: 'Our Story | Almannan Charity Foundation',
  meta: [{ name: 'description', content: 'Discover the mission, vision, and people behind Almannan Charity Foundation and our commitment to dignity, opportunity, and community.' }],
})

const values = [
  { title: 'Compassion first', text: 'Recognising the person behind every need, and offering support with kindness and respect.', icon: Heart },
  { title: 'Stronger together', text: 'Bringing people together to support their neighbours and care for their communities.', icon: Users },
  { title: 'Opportunity for tomorrow', text: 'Connecting essential support with education and practical skills for a more independent future.', icon: Sprout },
]
</script>

<template>
  <div class="story-page">
    <section class="site-container story-hero">
      <div class="story-introduction">
        <p class="eyebrow"><span class="little-dot"></span> Our story</p>
        <h1>At the heart of it all,<br />there is <em>community.</em></h1>
        <p class="story-lead">We believe that everyone deserves a life of dignity. And that a little kindness, shared by many, can open the door to a better future.</p>
        <NuxtLink to="/projects" class="text-link">Discover how we help <ArrowUpRight :size="18" /></NuxtLink>
      </div>
      <div class="story-mosaic">
        <figure class="story-main-photo">
          <img :src="photos[2].src" alt="Community members gathered with the Almannan Charity Foundation banner" fetchpriority="high" width="900" height="1000" />
          <figcaption>Connected by kindness.</figcaption>
        </figure>
        <div class="story-side">
          <div class="story-belief"><Heart :size="27" stroke-width="1.4" /><p>Every person.<br />Every possibility.</p><span>DIGNITY AT THE CENTRE</span></div>
          <img :src="photos[1].src" alt="Community members taking part in an Almannan outreach gathering" width="600" height="650" />
        </div>
      </div>
    </section>

    <section class="story-purpose">
      <div class="site-container">
        <div class="purpose-heading"><p class="eyebrow">Why we are here</p><h2>Meeting today's needs.<br /><em>Creating tomorrow's possibilities.</em></h2></div>
        <p class="purpose-intro">Almannan Charity Foundation is dedicated to reducing poverty, supporting people in need, and creating opportunities that uplift communities. Our work connects humanitarian assistance with education and skills training, so care can become a foundation for lasting change.</p>
        <div class="purpose-grid">
          <article class="purpose-card"><Compass :size="26" stroke-width="1.4" /><p class="eyebrow">Our mission</p><h3>Support that opens doors.</h3><p>To empower underprivileged individuals and communities through education, skills training, and humanitarian assistance — ensuring no one is left behind in the journey towards a better future.</p></article>
          <article class="purpose-card vision-card"><Eye :size="26" stroke-width="1.4" /><p class="eyebrow">Our vision</p><h3>A life of dignity for everyone.</h3><p>A society where every person has access to basic needs, education, skills, and opportunities to live a life of dignity and independence.</p></article>
        </div>
      </div>
    </section>

    <section class="site-container story-values">
      <div class="section-heading"><div><p class="eyebrow">What guides us</p><h2>Kindness, with purpose.</h2></div><p class="values-aside">The beliefs behind every act of care.</p></div>
      <div class="values-grid"><article v-for="value in values" :key="value.title"><span class="value-icon"><component :is="value.icon" :size="24" stroke-width="1.5" /></span><h3>{{ value.title }}</h3><p>{{ value.text }}</p></article></div>
    </section>

    <Team />
    <PageInvitation eyebrow="Be part of our story" title="A kinder future starts with us." description="Bring your time, your skills, or a little support. Together, we can make care reach further." />
  </div>
</template>

<style scoped>
.story-page h1 { font:400 clamp(42px,4.6vw,64px)/1.1 Georgia,serif; letter-spacing:-.045em; }
.story-page h2 { font:400 clamp(30px,3.3vw,44px)/1.18 Georgia,serif; letter-spacing:-.035em; }
.story-hero { display:grid; grid-template-columns:1fr 1fr; gap:65px; align-items:center; padding-block:76px 82px; }
.story-lead { color:var(--soft); font-size:15px; line-height:1.9; max-width:470px; margin-block:25px 28px; }
.story-mosaic { display:grid; grid-template-columns:1.2fr 1fr; gap:14px; height:430px; }
.story-main-photo { position:relative; border-radius:85px 8px 8px 8px; overflow:hidden; background:#e6e9df; }
.story-main-photo img { height:100%; width:100%; object-fit:cover; }
.story-main-photo figcaption { position:absolute; inset:auto 0 0; padding:45px 20px 22px; background:linear-gradient(transparent,#102e27bf); color:white; font-size:11px; }
.story-side { display:grid; grid-template-rows:1fr 1.2fr; gap:14px; min-height:0; }
.story-side>img { width:100%; height:100%; min-height:0; object-fit:cover; border-radius:8px 8px 65px 8px; }
.story-belief { background:#e4eacf; padding:27px 22px; border-radius:8px; display:flex; flex-direction:column; justify-content:space-between; gap:12px; }
.story-belief p { font:400 26px/1.2 Georgia,serif; letter-spacing:-.03em; }
.story-belief>span { font-size:8px; font-weight:600; letter-spacing:.13em; }
.story-purpose { background:#edf0e6; padding-block:74px; }
.purpose-heading { max-width:650px; }
.purpose-intro { max-width:740px; color:var(--soft); line-height:1.9; font-size:14px; margin-top:24px; }
.purpose-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:35px; }
.purpose-card { padding:36px; border-radius:10px; background:var(--forest); color:#f5f6ef; }
.purpose-card .eyebrow { color:#d4ddb7; margin-top:25px; margin-bottom:12px; }
.purpose-card h3 { font:400 29px/1.2 Georgia,serif; letter-spacing:-.03em; margin-bottom:17px; }
.purpose-card>p:last-child { font-size:13px; line-height:1.9; color:#d1ddd0; max-width:450px; }
.vision-card { background:var(--cream); border:1px solid #dce1d4; color:var(--forest); }
.vision-card .eyebrow { color:#5d704d; }
.vision-card>p:last-child { color:var(--soft); }
.story-values { padding-block:76px; }
.values-aside { font-size:12px; line-height:1.8; color:var(--soft); }
.values-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:35px; margin-top:40px; }
.values-grid article { border-top:1px solid #d5ddcc; padding-top:27px; }
.value-icon { color:#748357; }
.values-grid h3 { font-size:17px; font-weight:600; margin-block:22px 12px; }
.values-grid p { font-size:13px; color:var(--soft); line-height:1.9; }
@media(max-width:1100px) { .story-hero { gap:35px; } .story-mosaic { height:390px; } .story-belief { padding:23px 16px; } .story-belief p { font-size:23px; } }
@media(max-width:760px) { .story-hero { grid-template-columns:1fr; padding-block:44px 50px; gap:35px; } .story-page h1 { font-size:46px; } .story-lead { font-size:14px; } .story-mosaic { height:355px; gap:10px; } .story-side { gap:10px; } .story-main-photo { border-top-left-radius:65px; } .story-belief { padding:20px 14px; } .story-belief p { font-size:23px; } .story-belief>span { font-size:7px; } .story-purpose,.story-values { padding-block:50px; } .purpose-grid,.values-grid { grid-template-columns:1fr; gap:20px; } .purpose-card { padding:27px; } .purpose-card h3 { font-size:27px; } .values-grid { margin-top:28px; } .values-grid h3 { margin-top:16px; } }
@media(max-width:380px) { .story-page h1 { font-size:39px; } .story-mosaic { height:320px; } .story-belief p { font-size:20px; } }
</style>
