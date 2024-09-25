<template>
    <div class="team-member flex justify-center items-center flex-col">
        <img :src="image" alt="Team Member" class="w-48 h-48 object-cover rounded-full">
        <h3 class="text-xl font-bold text-blue-300 mb-2">{{ name }}</h3>
        <p class="text-gray-600">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
};
</script>