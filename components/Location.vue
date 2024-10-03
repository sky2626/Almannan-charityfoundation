<script setup lang="ts">
import Mail from './icons/Mail.vue';
import MyLoc from './icons/MyLoc.vue';
import Phone from './icons/Phone.vue';
import Locationtext from './Locationtext.vue';
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 shadow-xl shadow-blue-50 max-w-4xl p-8 mb-10 rounded-xl mx-auto ">
        <div class="flex flex-col justify-center items-center">
            <MyLoc class="text-4xl text-green-500" />
            <Locationtext title="Headquarters" description="Kumasi" />
        </div>
        <div class="flex flex-col justify-center items-center">
            <Mail class="text-4xl text-blue-500" />
            <Locationtext title="Email" description="Support@almannancharityfoundation.org" />
        </div>
        <div class="flex flex-col justify-center items-center">
            <Phone class="text-4xl text-violet-500" />
            <Locationtext title="Phone" description="+233-543-111-2224" />
        </div>
    </div>
</template>