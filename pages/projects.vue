<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-green-600 text-center mb-12">
        Our Projects
      </h1>

      <p class="max-w-3xl mx-auto text-center text-gray-600 mb-12">
        Here are some of the impactful projects we have undertaken to fight poverty, empower communities, and create lasting change.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card v-for="(project, index) in projects" :key="index" class="rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
          <CardHeader class="flex flex-col items-center space-y-4 p-0">
            <img :src="project.image" alt="" class="w-full h-40 object-cover rounded-xl" />
            <CardTitle class="text-start text-xl font-semibold text-green-600">
              {{ project.title }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600">{{ project.description }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Community Water Well",
    description: "Built a clean water well to provide safe drinking water for over 500 villagers.",
    image: "/4.jpeg"
  },
  {
    title: "School Supplies Distribution",
    description: "Provided books, uniforms, and learning materials to over 200 students.",
    image: "/6.jpeg"
  },
  {
    title: "Free Medical Outreach",
    description: "Organized free health checkups and provided essential medicines.",
    image: "/7.jpeg"
  }
]
</script>
