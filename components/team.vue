<script setup>
const team = [
  { name: 'Abdul Rahman', initials: 'AR', role: 'Founder & Director', bio: 'Leads the foundation’s vision to fight poverty and empower communities.' },
  { name: 'Amina Ibrahim', initials: 'AI', role: 'Programs Coordinator', bio: 'Oversees food aid, education, and skills training initiatives.' },
  { name: 'Rauf Ibrahim', initials: 'RI', role: 'Community Outreach', bio: 'Connects with communities and ensures our support reaches those in need.' },
]
</script>

<template>
  <section class="team-section">
    <div class="site-container">
      <div class="section-heading"><div><p class="eyebrow">People behind the purpose</p><h2>A shared heart for service.</h2></div><NuxtLink to="/contact" class="text-link">Get in touch <span aria-hidden="true">↗</span></NuxtLink></div>
      <p class="section-description">Meet the people helping turn compassion into action.</p>
      <div class="team-grid">
        <article v-for="member in team" :key="member.name" class="team-card">
          <span class="team-initials" aria-hidden="true">{{ member.initials }}</span>
          <p class="team-role">{{ member.role }}</p>
          <h3>{{ member.name }}</h3>
          <p class="team-bio">{{ member.bio }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-section { background:#f0f1e9; padding-block:72px; }
.team-section h2 { font:400 clamp(30px,3.3vw,44px)/1.18 Georgia,serif; letter-spacing:-.035em; }
.team-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; }
.team-card { background:var(--cream); border:1px solid #dfe4d7; border-radius:9px; padding:30px; }
.team-initials { display:grid; place-items:center; height:68px; width:68px; border-radius:50%; background:#e3e9d3; font:400 27px Georgia,serif; color:var(--forest); margin-bottom:30px; }
.team-role { color:#6a7c4f; font-size:9px; text-transform:uppercase; letter-spacing:.12em; font-weight:700; margin-bottom:10px; }
.team-card h3 { font:400 25px/1.2 Georgia,serif; margin-bottom:14px; }
.team-bio { font-size:13px; line-height:1.9; color:var(--soft); }
@media(max-width:760px) { .team-section { padding-block:50px; } .team-grid { grid-template-columns:1fr; gap:14px; } .team-card { padding:26px; } .team-initials { height:58px; width:58px; margin-bottom:22px; } }
</style>
