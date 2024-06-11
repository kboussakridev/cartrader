<template>
    <div>
        <NavBar/>
        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <div class="mt-32 flex">
            <div class="shadow border w-64 mr-10 z-30 h-[190px]">
                <div class="p-5 flex justify-between relative cursor-pointer border-b">
                    <h3>Location</h3>
                    <h3 class="text-blue-400 capitalize">Toronto</h3>
                    <!-- <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                        <input type="text" class="border p-1 rounded">
                        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
                    </div> -->
                </div>
                <div class="p-5 flex justify-between relative cursor-pointer border-b">
                    <h3>Make</h3>
                    <h3 class="text-blue-400 capitalize">Toyota</h3>

                </div>
                <div class="p-5 flex justify-between relative cursor-pointer">
                    <h3>Price</h3>
                    <h3 class="text-blue-400 capitalize">Any</h3>

                </div>
            </div>
            <div class="flex flex-col">
            <div class="w-full">
                <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
                    <div class="flex h-full">
                        <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="car"
                        class="w-[300px] h-full">
                        <div class="p-4 flex flex-col">
                            <div>
                                <h1 class="text-2xl text-blue-700">Range rover</h1>
                                <p class="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <h1 class="mt-auto text-xl">39 999 €</h1>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="w-full">
                <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
                    <div class="flex h-full">
                        <img src="https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg" 
                        alt="car"
                        class="w-[300px] h-full">
                        <div class="p-4 flex flex-col">
                            <div>
                                <h1 class="text-2xl text-blue-700">Toyota</h1>
                                <p class="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <h1 class="mt-auto text-xl">25 500 €</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
                    <div class="flex h-full">
                        <img src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg" 
                        alt="car"
                        class="w-[300px] h-full">
                        <div class="p-4 flex flex-col">
                            <div>
                                <h1 class="text-2xl text-blue-700">Audi S-line</h1>
                                <p class="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <h1 class="mt-auto text-xl">44 700 €</h1>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>