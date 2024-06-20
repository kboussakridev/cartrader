<template>
        <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
            <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
            <div v-if="user" class="flex">
                <NuxtLink class="mr-5" to="/profile/listings">profile</NuxtLink>
                <p class="cursor-pointer" @click="logout">Logout</p>
            </div>
            <nuxt-link v-else to="/login">Login</nuxt-link>
        </header>
</template>

<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
    // 1) make user.value = null
    // 2) Remove JWT from Cookie Browser
    const { error } = supabase.auth.signOut();

    try {
        await $fetch('/api/_supabase/session', {
            method: "POST",
            body: {event: "SIGNED_OUT", session: null}
        })
    } catch (error) {
        return console.log(error);
    }

    user.value = null;
    navigateTo("/");

    // 3) Navigate to homepage 
}

</script>