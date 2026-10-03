<script setup>
import { ArrowUpRight, ArrowDown, Heart, Users, HandHeart, Lightbulb, Mail, Phone, Check, Copy } from 'lucide-vue-next'
import { photos } from '~/utils/media'

useHead({
  title: 'Volunteer With Us | Almannan Charity Foundation',
  meta: [{ name: 'description', content: 'Share your time and skills with Almannan Charity Foundation. Explore ways to help and prepare your volunteer application.' }],
})

const opportunities = [
  { title: 'Community outreach', text: 'Help bring people together and support our community activities.', icon: Users },
  { title: 'Practical support', text: 'Lend a hand with preparing and sharing food, clothing, and essential supplies.', icon: HandHeart },
  { title: 'Share your skills', text: 'Tell us how your experience in education, organising, or other areas could help.', icon: Lightbulb },
]
const form = reactive({ name: '', email: '', phone: '', interest: '', reason: '' })
const prepared = ref(false)
const nameError = ref('')
const copyStatus = ref('')
const draftPanel = ref(null)
const recipient = 'support@almannancharityfoundation.org'
const applicationBody = computed(() => [
  'Hello Almannan Charity Foundation,', '',
  'I would like to volunteer with your foundation.', '',
  `Full name: ${form.name.trim()}`,
  `Email: ${form.email.trim()}`,
  `Phone: ${form.phone.trim() || 'Not provided'}`,
  `Area of interest: ${form.interest || 'Open to suggestions'}`, '',
  'About me and why I would like to volunteer:',
  form.reason.trim() || 'I would be happy to discuss how I can help.', '',
  'Thank you.',
].join('\n'))
const applicationLink = computed(() => `mailto:${recipient}?subject=${encodeURIComponent('Volunteer application — ' + form.name.trim())}&body=${encodeURIComponent(applicationBody.value)}`)
watch(form, () => { prepared.value = false; copyStatus.value = ''; nameError.value = '' })
function chooseInterest(interest) { form.interest = interest }
async function prepareApplication() {
  if (!form.name.trim()) { nameError.value = 'Please enter your full name.'; return }
  prepared.value = true
  copyStatus.value = ''
  await nextTick()
  draftPanel.value?.focus()
}
async function copyApplication() {
  try {
    await navigator.clipboard.writeText(applicationBody.value)
    copyStatus.value = 'Application copied. Paste it into an email to our team.'
  } catch {
    copyStatus.value = 'Please select and copy the application text below.'
  }
}
</script>

<template>
  <div class="volunteer-page">
    <section class="site-container volunteer-hero">
      <div class="volunteer-introduction">
        <p class="eyebrow"><span class="little-dot"></span> Volunteer with us</p>
        <h1>Your time.<br />Your kindness.<br /><em>A brighter day.</em></h1>
        <p>Big hearts make a difference. Join a community of people who care, and share your time and skills to help others move forward.</p>
        <a href="#volunteer-application" class="action-button">Find your way to help <ArrowDown :size="17" /></a>
        <span class="volunteer-note"><Heart :size="16" /> A willingness to help is a beautiful place to start.</span>
      </div>
      <figure class="volunteer-photo"><img :src="photos[5].src" alt="An Almannan outreach moment with community members offering support" width="900" height="1000" fetchpriority="high" /><figcaption><span>BETTER, TOGETHER</span><p>Small acts.<br />Shared purpose.</p></figcaption></figure>
    </section>

    <section class="opportunities-section">
      <div class="site-container">
        <div class="section-heading"><div><p class="eyebrow">There is a place for you here</p><h2>Different strengths.<br />One caring community.</h2></div><p class="opportunities-aside">Explore ways you could contribute.<br />Tell us what feels right for you.</p></div>
        <div class="opportunities-grid">
          <article v-for="(opportunity, index) in opportunities" :key="opportunity.title" class="opportunity-card">
            <div class="opportunity-top"><component :is="opportunity.icon" :size="26" stroke-width="1.5" /><span>0{{ index + 1 }}</span></div>
            <h3>{{ opportunity.title }}</h3><p>{{ opportunity.text }}</p>
            <a href="#volunteer-application" class="text-link" :aria-label="`Express interest in ${opportunity.title.toLowerCase()}`" @click="chooseInterest(opportunity.title)">I'd like to help <ArrowUpRight :size="17" /></a>
          </article>
        </div>
      </div>
    </section>

    <section id="volunteer-application" class="site-container application-section">
      <div class="application-intro">
        <p class="eyebrow">Take the first step</p><h2>Let's put your<br /><em>kindness into action.</em></h2>
        <p>Tell us a little about yourself and how you would like to contribute. We welcome people who want to support our mission with their time and skills.</p>
        <ol class="application-steps"><li><span>01</span><div><h3>Introduce yourself</h3><p>Share your details and what interests you.</p></div></li><li><span>02</span><div><h3>Review your application</h3><p>Check the email draft prepared from your answers.</p></div></li><li><span>03</span><div><h3>Send it to our team</h3><p>Open your email app and send the application to start a conversation.</p></div></li></ol>
        <aside class="volunteer-contact"><h3>Prefer a conversation first?</h3><a :href="`mailto:${recipient}`"><Mail :size="16" /><span>{{ recipient }}</span></a><a href="tel:+233530492371"><Phone :size="16" /><span>+233 530 492 371</span></a></aside>
      </div>

      <div class="application-card">
        <h3>Your volunteer introduction</h3><p class="form-description">Fields marked <span aria-hidden="true">*</span> are required.</p>
        <form @submit.prevent="prepareApplication">
          <div class="form-field"><label for="volunteer-name">Full name <span aria-hidden="true">*</span></label><input id="volunteer-name" v-model="form.name" name="name" type="text" autocomplete="name" placeholder="Your full name" maxlength="100" required :aria-invalid="nameError ? true : undefined" :aria-describedby="nameError ? 'volunteer-name-error' : undefined" /><p v-if="nameError" id="volunteer-name-error" class="field-error" role="alert">{{ nameError }}</p></div>
          <div class="form-field"><label for="volunteer-email">Email address <span aria-hidden="true">*</span></label><input id="volunteer-email" v-model="form.email" name="email" type="email" autocomplete="email" placeholder="you@example.com" maxlength="160" required /></div>
          <div class="form-field"><label for="volunteer-phone">Phone number <span class="optional">Optional</span></label><input id="volunteer-phone" v-model="form.phone" name="phone" type="tel" autocomplete="tel" placeholder="Your contact number" maxlength="40" /></div>
          <div class="form-field"><label for="volunteer-interest">How would you like to help? <span class="optional">Optional</span></label><select id="volunteer-interest" v-model="form.interest" name="interest"><option value="">I'm open to suggestions</option><option v-for="opportunity in opportunities" :key="opportunity.title" :value="opportunity.title">{{ opportunity.title }}</option></select></div>
          <div class="form-field"><label for="volunteer-reason">A little about you <span class="optional">Optional</span></label><textarea id="volunteer-reason" v-model="form.reason" name="reason" rows="4" maxlength="1200" placeholder="What inspires you to volunteer? Tell us about your skills and availability." /></div>
          <p class="email-explanation"><Mail :size="17" /><span>This form prepares an email to our team. You will review and send it from your email app.</span></p>
          <button type="submit" class="action-button prepare-button">Prepare my application <ArrowUpRight :size="17" /></button>
        </form>
        <section v-if="prepared" ref="draftPanel" class="application-draft" tabindex="-1" aria-labelledby="draft-title">
          <h4 id="draft-title"><Check :size="19" /> Your email draft is ready</h4>
          <p>Your application has not been sent yet. Review it below, then open your email app to send it.</p>
          <label for="application-preview">Application preview</label>
          <textarea id="application-preview" :value="applicationBody" readonly rows="9" />
          <a :href="applicationLink" class="action-button">Open email application <Mail :size="16" /></a>
          <button class="copy-application" type="button" @click="copyApplication"><Copy :size="15" /> Copy application text</button>
          <p>No email app? Copy the text and email it to <a :href="`mailto:${recipient}`">{{ recipient }}</a>.</p>
          <p v-if="copyStatus" role="status" class="copy-status">{{ copyStatus }}</p>
        </section>
      </div>
    </section>

    <section class="volunteer-closing"><div class="site-container"><div><p class="eyebrow">Get to know the community</p><h2>See kindness in action.</h2><p>Explore the moments and people behind our work.</p></div><NuxtLink to="/gallery" class="action-button">Visit our gallery <ArrowUpRight :size="17" /></NuxtLink></div></section>
  </div>
</template>

<style scoped>
.volunteer-page h1 { font:400 clamp(45px,4.7vw,66px)/1.08 Georgia,serif; letter-spacing:-.045em; }
.volunteer-page h2 { font:400 clamp(30px,3.3vw,44px)/1.18 Georgia,serif; letter-spacing:-.035em; }
.volunteer-hero { display:grid; grid-template-columns:1fr 1fr; gap:75px; align-items:center; padding-block:68px 78px; }
.volunteer-introduction>p:not(.eyebrow) { color:var(--soft); line-height:1.9; font-size:15px; max-width:460px; margin-block:25px; }
.volunteer-note { display:flex; align-items:center; gap:9px; color:#758365; font-size:10px; line-height:1.7; margin-top:24px; }
.volunteer-note svg { flex-shrink:0; }
.volunteer-photo { position:relative; height:485px; overflow:hidden; border-radius:100px 10px 10px 10px; background:#e5e9df; }
.volunteer-photo img { width:100%; height:100%; object-fit:cover; }
.volunteer-photo figcaption { position:absolute; inset:45% 0 0; background:linear-gradient(transparent,#102e27d9); color:white; display:flex; flex-direction:column; justify-content:end; padding:32px; }
.volunteer-photo figcaption>span { font-size:9px; letter-spacing:.17em; color:#d8e4b7; margin-bottom:12px; }
.volunteer-photo figcaption p { font:400 34px/1.15 Georgia,serif; letter-spacing:-.025em; }
.opportunities-section { background:#edf0e6; padding-block:70px; }
.opportunities-aside { font-size:13px; color:var(--soft); line-height:1.9; }
.opportunities-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; margin-top:35px; }
.opportunity-card { display:flex; flex-direction:column; padding:29px; border:1px solid #dfe4d6; background:var(--cream); border-radius:9px; }
.opportunity-top { display:flex; align-items:center; justify-content:space-between; color:#6e825c; margin-bottom:29px; }
.opportunity-top>span { color:#8b9881; font-size:10px; }
.opportunity-card h3 { font:400 26px/1.2 Georgia,serif; letter-spacing:-.025em; margin-bottom:15px; }
.opportunity-card>p { font-size:13px; color:var(--soft); line-height:1.9; margin-bottom:24px; }
.opportunity-card .text-link { align-self:start; margin-top:auto; }
.application-section { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; padding-block:85px; }
.application-intro>p:not(.eyebrow) { max-width:440px; color:var(--soft); font-size:14px; line-height:1.9; margin-top:23px; }
.application-steps { display:grid; gap:24px; margin-top:35px; }
.application-steps li { display:flex; align-items:start; gap:17px; }
.application-steps li>span { display:grid; place-items:center; flex-shrink:0; width:34px; height:34px; border:1px solid #d4dcc6; border-radius:50%; font-size:10px; color:#718251; }
.application-steps h3 { font-size:13px; font-weight:600; margin-bottom:6px; }
.application-steps p { font-size:12px; color:var(--soft); line-height:1.8; max-width:335px; }
.volunteer-contact { border-top:1px solid var(--line); padding-top:25px; margin-top:35px; }
.volunteer-contact h3 { font:400 23px/1.2 Georgia,serif; margin-bottom:20px; }
.volunteer-contact a { display:flex; align-items:center; gap:10px; font-size:12px; margin-bottom:15px; }
.volunteer-contact a span { overflow-wrap:anywhere; min-width:0; }
.volunteer-contact svg { color:#7c8c60; flex-shrink:0; }
.application-card { background:#fffefa; border:1px solid #dfe4d7; border-radius:12px; padding:35px; min-width:0; }
.application-card>h3 { font:400 29px/1.2 Georgia,serif; letter-spacing:-.025em; }
.form-description { font-size:11px; color:var(--soft); margin-block:12px 28px; }
.form-field { margin-bottom:20px; }
.form-field label { display:flex; align-items:center; gap:4px; font-size:12px; font-weight:600; margin-bottom:9px; }
.optional { margin-left:auto; color:#788270; font-size:10px; font-weight:400; }
.form-field input,.form-field select,.form-field textarea,.application-draft textarea { display:block; width:100%; border:1px solid #d9dfd0; border-radius:6px; background:white; color:var(--ink); padding:12px 13px; font-family:inherit; font-size:13px; line-height:1.6; }
.form-field input,.form-field select { min-height:46px; }
.form-field textarea,.application-draft textarea { resize:vertical; }
.form-field input::placeholder,.form-field textarea::placeholder { color:#838b7c; }
.email-explanation { display:flex; align-items:start; gap:10px; font-size:11px; line-height:1.8; color:var(--soft); margin-block:5px 21px; }
.email-explanation svg { flex-shrink:0; margin-top:3px; color:#75855c; }
.prepare-button { width:100%; }
.field-error { font-size:12px; color:#a82d24; margin-top:8px; }
.application-draft { background:#eef2e5; border:1px solid #d2dec2; border-radius:8px; padding:22px; margin-top:27px; }
.application-draft h4 { display:flex; align-items:center; gap:8px; font-size:15px; font-weight:600; }
.application-draft>p { color:#52644e; font-size:12px; line-height:1.8; margin-block:12px 17px; overflow-wrap:anywhere; }
.application-draft label { display:block; font-size:11px; font-weight:600; margin-bottom:8px; }
.application-draft textarea { font-size:12px; margin-bottom:18px; }
.application-draft>.action-button { width:100%; padding-inline:12px; }
.copy-application { display:flex; align-items:center; justify-content:center; gap:8px; width:100%; font-size:11px; padding:14px 5px 3px; }
.application-draft>p a { text-decoration:underline; text-underline-offset:3px; }
.application-draft .copy-status { font-weight:600; margin-bottom:0; }
.volunteer-closing { padding-block:55px; background:#e2e9ce; }
.volunteer-closing>.site-container { display:flex; justify-content:space-between; align-items:center; gap:30px; }
.volunteer-closing .eyebrow { margin-bottom:14px; }
.volunteer-closing p:not(.eyebrow) { color:#596a50; font-size:13px; margin-top:16px; line-height:1.8; }
@media(max-width:1100px) { .volunteer-hero { gap:40px; } .application-section { gap:40px; } .application-card { padding:27px; } .opportunity-card { padding:23px; } }
@media(max-width:760px) { .volunteer-hero { grid-template-columns:1fr; gap:32px; padding-block:44px 50px; } .volunteer-page h1 { font-size:50px; } .volunteer-introduction>p:not(.eyebrow) { font-size:14px; } .volunteer-photo { height:365px; border-top-left-radius:70px; } .volunteer-photo figcaption { padding:26px; } .opportunities-section { padding-block:50px; } .opportunities-grid { grid-template-columns:1fr; gap:16px; margin-top:27px; } .opportunity-card { padding:27px; } .opportunity-top { margin-bottom:23px; } .application-section { grid-template-columns:1fr; gap:35px; padding-block:50px; } .application-card { padding:25px 21px; } .application-card>h3 { font-size:27px; } .application-draft { padding:18px 14px; } .volunteer-closing { padding-block:45px; } .volunteer-closing>.site-container { flex-direction:column; align-items:start; gap:25px; } }
@media(max-width:380px) { .volunteer-page h1 { font-size:44px; } .volunteer-contact a { font-size:11px; } }
</style>
