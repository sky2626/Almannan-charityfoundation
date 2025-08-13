<template>
  <section class="py-16">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-green-600 text-center mb-12">
        Contact Us
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p class="text-gray-600 mb-6">
            Have questions, suggestions, or want to support our cause? We’d love to hear from you.
          </p>

          <div class="space-y-4">
            <p class="flex items-center gap-2">
              <MapPin class="w-5 h-5 text-green-600" />
              123 Charity Street, Accra, Ghana
            </p>
            <p class="flex items-center gap-2">
              <Mail class="w-5 h-5 text-green-600" />
              support@almannancharity.org
            </p>
            <p class="flex items-center gap-2">
              <Phone class="w-5 h-5 text-green-600" />
              +233 53 049 2371
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4 mt-6">
            <a href="#" class="text-gray-500 hover:text-green-600">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-500 hover:text-green-600">
              <Twitter class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-500 hover:text-green-600">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="text-gray-500 hover:text-green-600">
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Send a Message</h2>

          <p v-if="warningMessage" class="mb-4 p-3 text-red-600 bg-red-100 border border-red-600 rounded-xl">
            {{ warningMessage }}
          </p>
          <p v-if="successMessage" class="mb-4 p-3 text-green-600 bg-green-100 border border-green-600 rounded-xl">
            {{ successMessage }}
          </p>

          <input v-model="form.name" type="text" placeholder="Your Name"
            class="w-full px-4 py-2 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />

          <input v-model="form.email" type="email" placeholder="Your Email"
            class="w-full px-4 py-2 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />

          <textarea v-model="form.message" placeholder="Your Message" rows="5"
            class="w-full px-4 py-2 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>

          <button @click="sendMessage"
            class="bg-green-600 text-white w-full py-3 rounded-xl hover:bg-green-700">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-vue-next"

const form = ref({
  name: "",
  email: "",
  message: ""
})

const warningMessage = ref("")
const successMessage = ref("")

async function sendMessage() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    warningMessage.value = "Please fill in all fields before sending."
    successMessage.value = ""
    return
  }

  try {
    warningMessage.value = ""
    await $fetch("/api/contact", {
      method: "POST",
      body: form.value
    })
    successMessage.value = "Your message has been sent successfully!"
    form.value = { name: "", email: "", message: "" }
  } catch (err) {
    warningMessage.value = "Failed to send your message. Please try again."
  }
}
</script>
