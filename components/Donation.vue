<template>
    <section class="py-12 mx-auto pb-24">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">Support Our Cause</h1>
            <p class="text-gray-600">Your contributions help us make a difference in the community.</p>
        </div>
        <!-- Text and form -->
        <div class="grid grid-cols-1 items-center md:grid-cols-[1fr_auto_1fr] gap-8 max-w-6xl mx-auto px-4">
            <!-- MoMo Details -->
            <div
                class="grid grid-cols-[144px_1fr] items-center mb-6 p-4 bg-yellow-100 text-yellow-900 rounded-xl border border-yellow-400">
                <div class="flex flex-col items-center w-36">
                    <img src="/momo.png" alt="MTN MoMo" class="w-full h-16 mx-auto mb-4" />
                </div>
                <div class="text-left">
                    <p class="font-bold text-lg">MTN Mobile Money</p>
                    <p>AL-MANNAN CHARITY FOUNDATION</p>
                    <p class="text-xl font-semibold">0530492371</p>
                </div>
            </div>

            <!-- Divider -->
            <div class=" flex-col items-center justify-center h-36 hidden md:flex">
                <div class="w-px h-24 bg-gray-300 hidden md:block"></div>
                <span class="hidden md:block text-gray-500 font-semibold my-4">or</span>
                <div class="w-px h-24 bg-gray-300 hidden md:block"></div>
            </div>

            <!-- Paystack Donation Form -->
            <div class="max-w-xl mx-auto text-center md:text-left">
                <!-- Warning message -->
                <p v-if="warningMessage"
                    class="mb-4 p-3 text-red-600 text-center border border-red-600 bg-red-100 font-medium rounded-xl">
                    {{ warningMessage }}
                </p>
                <p v-if="successMessage"
                    class="mb-4 p-3 text-green-600 text-center border border-green-600 bg-green-100 font-medium rounded-xl">
                    {{ successMessage }}
                </p>

                <!-- Amount input -->
                <input v-model="amount" type="number" placeholder="Enter amount (GHS)"
                    class="w-full px-4 py-2 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />

                <!-- Email input -->
                <input v-model="email" type="email" placeholder="Enter your email (optional)"
                    class="w-full px-4 py-2 mb-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />

                <!-- Paystack button -->
                <Button @click="payWithPaystack"
                    class="bg-green-600 text-white px-4 w-full py-3 rounded-xl hover:bg-green-700">
                    Donate Now
                </Button>
            </div>
        </div>
    </section>
</template>



<script setup>
import { Divide } from 'lucide-vue-next'

const config = useRuntimeConfig()
const amount = ref("")
const email = ref("")
const warningMessage = ref("")
const successMessage = ref("")

function payWithPaystack() {
    warningMessage.value = ""

    if (!amount.value) {
        warningMessage.value = "Please enter an amount to proceed."
        return
    }

    const handler = PaystackPop.setup({
        key: config.public.paystackKey,
        email: email.value || "noemail@charity.com", // fallback if email empty
        amount: parseInt(amount.value) * 100,
        currency: "GHS",
        callback: function (response) {
            successMessage.value = ` Payment successful. Reference: ${response.reference}`
            amount.value = ""
            email.value = ""
        },
        onClose: function () {
            warningMessage.value = "⚠️  Payment window closed."
        }
    })

    handler.openIframe()
}
</script>
