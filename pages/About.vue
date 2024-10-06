<script setup lang="ts">
import History from '~/components/History.vue';
</script>

<template>
    <div class="about-page">
        <AboutHero />
        <section class="bg-gray-100 flex justify-center p-8">
            <History />
        </section>
        <section class="contact-section bg-white p-8">
            <h2 class="text-3xl text-blue-300 font-bold text-center mb-4">our mission</h2>
            <Mission />
        </section>
        <section class="team-section bg-white px-8 pt-8 pb-28">
            <h2 class="text-3xl font-bold text-blue-300 text-center mb-16">Our Team</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <TeamMember name="John Doe" title="CEO" image="https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789_1280.jpg" />
                <TeamMember name="John Doe" title="CEO" image="https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789_1280.jpg" />
                <TeamMember name="John Doe" title="CEO" image="https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789_1280.jpg" />
            </div>
        </section>
        
    </div>
</template>