<template>
    <div>
        <Header/>
        <div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://cdn.pixabay.com/photo/2018/01/18/18/00/ferrari-3090880_1280.jpg')]">
            <div class="z-10 absolute w-full h-full flex justify-center items-center">
                <div class="text-center w-1/2">
                    <h1 class="text-7xl font-serif mb-10 text-white">Find your drive</h1>
                    <div class="font-serif w-full text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
                        <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Search by city...">
                        <button class="bg-sky-500 px-10 text-white">Search</button>
                    </div>
                </div>
            </div>
            <div class="z-1 absolute w-full h-full bg-black opacity-50">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>