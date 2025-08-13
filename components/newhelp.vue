<template>
    <section class="relative bg-gradient-to-b from-green-50 to-white">
        <!-- Hero -->
        <div class="max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Together We Can Make a Difference
            </h1>
            <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We provide food, shelter, and essential support to the poor and needy.
                Every small act of kindness can change a life.
            </p>
            <div class="mt-8 flex justify-center gap-4">
                <Button class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-lg shadow-lg" onclick="document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });">
                    Donate Now
                </Button>
                <Button variant="outline" 
                        @click="goToVolunteer"
                    class="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 text-lg rounded-lg">
                    Become a Volunteer
                </Button>
            </div>
        </div>

        <!-- Cards Section -->
        <div class="max-w-7xl mx-auto px-4 pb-20 grid gap-8 md:grid-cols-3">
            <!-- Card: Become Volunteer -->
            <Card class="rounded-2xl shadow-lg border-0 hover:shadow-xl transition">
                <CardHeader>
                    <h3 class="text-2xl font-bold text-green-600">Become a Volunteer</h3>
                </CardHeader>
                <CardContent>
                    <p class="text-gray-600 mb-4">
                        Join our mission to bring hope to the needy. Your time and skills can change lives.
                    </p>
                    <Button @click="goToVolunteer" class="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                        Join Us
                    </Button>
                </CardContent>
            </Card>

            <!-- Card: Donate -->
            <Card class="rounded-2xl shadow-lg border-0 hover:shadow-xl transition">
                <CardHeader>
                    <h3 class="text-2xl font-bold text-green-600">Donate</h3>
                </CardHeader>
                <CardContent>
                    <p class="text-gray-600 mb-4">
                        Every contribution helps us provide food, shelter, and education to those in need.
                    </p>
                    <Button class="bg-green-600 hover:bg-green-700 text-white rounded-lg" onclick="document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });">
                        Give Today
                    </Button>
                </CardContent>
            </Card>

            <!-- Card: Support Programs -->
            <Card class="rounded-2xl shadow-lg border-0 hover:shadow-xl transition">
                <CardHeader>
                    <h3 class="text-2xl font-bold text-green-600">Support Our Programs</h3>
                </CardHeader>
                <CardContent>
                    <p class="text-gray-600 mb-4">
                        Help us run sustainable programs that provide basic life needs and education.
                    </p>
                    <Button class="bg-green-600 hover:bg-green-700 text-white rounded-lg" onclick="document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });">
                        Support Now
                    </Button>
                </CardContent>
            </Card>
        </div>
    </section>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { useRouter } from 'vue-router'
const router = useRouter()

function goToVolunteer() {
  router.push('/volunteer')
}



</script>
