<template>
  <section class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-green-600 mb-12">Meet Our Team</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="(member, index) in team" :key="index"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col items-center">
          
          <img :src="member.image" :alt="member.name" class="w-32 h-32 rounded-full object-cover mb-4" />
          <h3 class="text-lg font-semibold text-gray-800">{{ member.name }}</h3>
          <p class="text-green-600 font-medium">{{ member.role }}</p>
          <p class="text-gray-600 mt-2 text-sm text-center">{{ member.bio }}</p>

          <div class="flex space-x-4 mt-4">
            <a v-if="member.facebook" :href="member.facebook" target="_blank" class="text-gray-500 hover:text-green-600">
              <Facebook class="w-5 h-5" />
            </a>
            <a v-if="member.twitter" :href="member.twitter" target="_blank" class="text-gray-500 hover:text-green-600">
              <Twitter class="w-5 h-5" />
            </a>
            <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="text-gray-500 hover:text-green-600">
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Facebook, Twitter, Linkedin } from "lucide-vue-next"

const team = [
  {
    name: "Abdul Rahman",
    role: "Founder & Director",
    image: "/1.jpeg",
    bio: "Leads the foundation’s vision to fight poverty and empower communities.",
    facebook: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Amina Ibrahim",
    role: "Programs Coordinator",
    image: "/3.jpeg",
    bio: "Oversees food aid, education, and skills training initiatives.",
    facebook: "#",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Rauf Ibrahim",
    role: "Community Outreach",
    image: "/2.jpeg",
    bio: "Connects with communities and ensures our support reaches those in need.",
    facebook: "#",
    twitter: "#",
    linkedin: "#"
  }
]
</script>
