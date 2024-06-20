<template>
    <div class="mt-10">
        <h1>Login</h1>
        <button @click="login" class="bg-red-400 p-3 rounded text-white font-bold">Login with Google</button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "custom",
})

const supabase = useSupabaseClient()
const login = async () => {
    const { error } = supabase.auth.signInWithOAuth({
        provider: 'google',

        // options: {
        //     queryParams: {
        //         access_type: 'offline',
        //         prompt: 'consent',
        //     },
        //     redirectTo: 'http://localhost:3000'
        // },
    })
    if (error) {
        console.error(error)
    } 
}

</script>


  
  
