<template>
  <div class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-6 text-green-600 ">Volunteer with Us</h1>
    <p class="text-lg text-gray-700 mb-8">
      Join our mission to make a difference. We welcome passionate individuals who want to contribute their time and skills to our cause.
    </p>

    <form @submit.prevent="submitForm" class="space-y-6">
      <div>
        <label class="block font-medium mb-1">Full Name</label>
        <input v-model="form.name" type="text" class="border rounded-lg px-4 py-2 w-full" required />
      </div>

      <div>
        <label class="block font-medium mb-1">Email</label>
        <input v-model="form.email" type="email" class="border rounded-lg px-4 py-2 w-full" required />
      </div>

      <div>
        <label class="block font-medium mb-1">Phone Number</label>
        <input v-model="form.phone" type="tel" class="border rounded-lg px-4 py-2 w-full" />
      </div>

      <div>
        <label class="block font-medium mb-1">Why do you want to volunteer?</label>
        <textarea v-model="form.reason" rows="4" class="border rounded-lg px-4 py-2 w-full"></textarea>
      </div>

      <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
        Submit Application
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  reason: ''
})

const submitForm = () => {
  // Replace with your API call or email service
  console.log('Form Submitted:', form.value)
  alert('Thank you for volunteering! We will get back to you soon.')
  form.value = { name: '', email: '', phone: '', reason: '' }
}
</script>
