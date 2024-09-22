<template> 
    <div class="card bg-emerald-50 overflow-hidden rounded-tr-[50px]  rounded-b-md rounded-tl-sm">
        <img :src="imageUrl" alt="Card Image" class="w-full h-56 object-cover rounded-tr-[50px] rounded-bl-[50px]">
        <div class="p-6">
            <h2 class="text-lg font-bold mb-2 text-gray-700">{{ title }}</h2>
            <p class="text-gray-700">{{ description }}</p>
            
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: {
        imageUrl: {
            type: String,
            required: true,
        },
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