<template>
    <div class=" ">
        <div class="mt-4">
            <h2 class="text-xl text-gray-900 font-bold mb-1 text-center">{{ title }}</h2>
            <p class="text-gray-700 text-center text-wrap">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>