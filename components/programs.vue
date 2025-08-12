<template>
    <section class="py-16 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-green-600 mb-12">
                Our Programs
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card v-for="(program, index) in programs" :key="index"
                    class="rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                    <CardHeader class="flex flex-col items-center space-y-4">
                        <component :is="program.icon" class="w-12 h-12 text-green-600" />
                        <CardTitle class="text-xl font-semibold text-green-600">
                            {{ program.title }}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p class="text-gray-600">{{ program.description }}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Lucide icons
import {
    Utensils,
    GraduationCap,
    HeartPulse,
    Home,
    Wrench,
    Users
} from "lucide-vue-next"

const programs = [
    {
        title: "Food Aid Program",
        description:
            "Providing nutritious meals and food supplies to underprivileged families, ensuring no one goes hungry.",
        icon: Utensils
    },
    {
        title: "Education Support",
        description:
            "Offering school supplies, uniforms, and scholarships to children from low-income communities.",
        icon: GraduationCap
    },
    {
        title: "Health & Wellness",
        description:
            "Organizing medical checkups, providing essential medicines, and promoting healthy living.",
        icon: HeartPulse
    },
    {
        title: "Shelter & Clothing",
        description:
            "Distributing clothes, blankets, and offering temporary shelter for homeless individuals.",
        icon: Home
    },
    {
        title: "Skills Training",
        description:
            "Empowering individuals through vocational training and small business support programs.",
        icon: Wrench
    },
    {
        title: "Community Development",
        description:
            "Building sustainable projects like water wells, sanitation facilities, and community centers.",
        icon: Users
    }
]
</script>
