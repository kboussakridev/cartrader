<template>
    <div
        class="font-serif w-full text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
            placeholder="Search by city..."
            v-model="city"
            @keydown.enter="handleEnter"
            :class="cityError ? 'border-red-500 border' : ''">
        <button class="bg-sky-500 px-10 text-white" @click="handleSearche">Search</button>
    </div>
</template>

<script setup>
const city = ref("");
const cityError = ref(false);
const router = useRouter();

const handleSearche = () => {
    if (!city.value) {
        return cityError.value = true
    }
    navigateTo(`/city/${city.value}/car`)
}
const handleEnter = () => {
    handleSearche()
}
</script>