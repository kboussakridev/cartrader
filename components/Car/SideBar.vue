<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
        <!-- LOCATION START -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Location</h3>
            <h3 @click="updateModal('location')" class="text-blue-400 capitalize">{{ route.params.city }}</h3>
            <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                <input v-model="city" @keydown.enter="handleEnter" type="text" class="border p-1 rounded" />
                <button @click="onChangeLocation" class="bg-blue-400 w-full mt-2 rounded text-white p-1">Apply</button>
            </div>
        </div>
        <!-- LOCATION END -->

        <!-- MAKES START -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize" @click="updateModal('make')">{{ route.params.make || "Any" }}</h3>
            <div class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
                v-if="modal.make">
                <h4 v-for=" make in makes" :key="make" class="w-1/3" @click="onChangeMake(make)">{{ make }}</h4>
            </div>
        </div>
        <!-- MAKES END -->
        
        <!-- PRICE START -->
        <div class="p-5 flex justify-between relative cursor-pointer">
            <h3>Price</h3>
            <h3 @click="updateModal('price')" class="text-blue-400 capitalize">{{ priceRangeText }}</h3>
            <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white" v-if="modal.price">
                <input class="border p1 rounded" type="number" placeholder="Min" v-model="priceRange.min">
                <input class="border p1 rounded" type="number" @keydown.enter="handleEnter" placeholder="Max" v-model="priceRange.max">
                <button @click="onChangePrice" class="bg-blue-400 w-full mt-2 rounded text-white p-1"> Apply</button>
            </div>
        </div>
        <!-- PRICE END -->
    </div>
</template>

<script setup>
const { makes } = useCards();
const route = useRoute()
const router = useRouter()
//console.log(route.query);
const city = ref("")
const priceRange = ref({
    min: "",
    max: "",
})

const priceRangeText = computed(() => {
    const minPrice = route.query.minPrice;
    const maxPrice = route.query.maxPrice;
    if (!minPrice && !maxPrice) return "Any";
    else if (!minPrice && maxPrice) {
        return `< ${maxPrice}€`
    }
    else if (minPrice && !maxPrice) {
        return `> ${minPrice}€`
    }
    else {
        return `${minPrice}€-${maxPrice}€`
    }
})
// On dissimule le panel a false
const modal = ref({
    make: false,
    location: false,
    price: false
})
// Evenement @Click : qui permet d'ouvrir le panel
const updateModal = (key) => {
    modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
    if (!city.value) return;
    if (!isNaN(parseInt(city.value))) {
        throw createError({
            statusCode: 400,
            message: "Invalid city format"
        })
    }
    updateModal('location');
    navigateTo(`/city/${city.value}/car/${route.params.make}`);
    city.value = "";
}

const handleEnter = () => {
    onChangeLocation(),
    onChangePrice()
}


const onChangeMake = (make) => {
    updateModal("make")
    navigateTo(`/city/${route.params.city}/car/${make}`)
}

const onChangePrice = () => {
    updateModal("price")
    if (priceRange.value.max && priceRange.value.min) {
        if(priceRange.value.min > priceRange.value.max) return;
    }

    router.push({
    query: {
        minPrice: priceRange.value.min,
        maxPrice: priceRange.value.max,
    }
})
}



</script>


http://localhost:3000/city/hh/car/Genesis?banana=123&orange=345