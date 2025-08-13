<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-green-600 mb-4">
          About Al-Mannan Charity Foundation
        </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          We are dedicated to eradicating poverty, supporting the needy, providing skills training, 
          and creating opportunities that uplift entire communities. Our mission is rooted in compassion, 
          empowerment, and sustainable development.
        </p>
      </div>

      <!-- Mission & Vision -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-white shadow-lg rounded-2xl p-6">
          <h2 class="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
          <p class="text-gray-700">
            To empower underprivileged individuals and communities through education, skills training, 
            and humanitarian assistance — ensuring no one is left behind in the journey towards a better future.
          </p>
        </div>
        <div class="bg-white shadow-lg rounded-2xl p-6">
          <h2 class="text-2xl font-semibold text-green-600 mb-4">Our Vision</h2>
          <p class="text-gray-700">
            A society where every person has access to basic needs, education, skills, and opportunities 
            to live a life of dignity and independence.
          </p>
        </div>
      </div>

      <!-- Programs -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-green-600">Our Programs</h2>
        <p class="text-gray-600 mt-2">We focus on six core areas to create lasting change.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          v-for="(program, index) in programs"
          :key="index"
          class="rounded-2xl shadow-lg hover:shadow-xl transition duration-300 bg-white"
        >
          <CardHeader class="flex flex-col items-center space-y-4">
            <component :is="program.icon" class="w-12 h-12 text-green-600" />
            <CardTitle class="text-xl font-semibold text-green-600">
              {{ program.title }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600 text-center">
              {{ program.description }}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
    <Team />
  </section>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Utensils, GraduationCap, HeartPulse, Home, Wrench, Users } from "lucide-vue-next"

const programs = [
  {
    title: "Food Aid Program",
    description: "Providing nutritious meals and food supplies to underprivileged families, ensuring no one goes hungry.",
    icon: Utensils
  },
  {
    title: "Education Support",
    description: "Offering school supplies, uniforms, and scholarships to children from low-income communities.",
    icon: GraduationCap
  },
  {
    title: "Health & Wellness",
    description: "Organizing medical checkups, providing essential medicines, and promoting healthy living.",
    icon: HeartPulse
  },
  {
    title: "Shelter & Clothing",
    description: "Distributing clothes, blankets, and offering temporary shelter for homeless individuals.",
    icon: Home
  },
  {
    title: "Skills Training",
    description: "Empowering individuals through vocational training and small business support programs.",
    icon: Wrench
  },
  {
    title: "Community Development",
    description: "Building sustainable projects like water wells, sanitation facilities, and community centers.",
    icon: Users
  }
]
</script>
