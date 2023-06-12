<script setup>
import { useUserAuth } from "~/stores/userAuth";
definePageMeta({
  middleware: "auth",
});

const { errorBag , userAuthToken } = useUserAuth();
const { $prodash } = useNuxtApp();
const { params } = useRoute();
const pending = ref(false);
const success = ref('');
const headers = { Authorization: `Bearer ${userAuthToken}`}
const data = ref({
  name: '',
  email: '',
  mobile: '',
  telephone: '' 
});

const handleEditContact = async () => {
    pending.value = true;
        try{
        const response = await $prodash.put(`/api/contacts/${params.id}`,
    {
      name: data.value.name,
      email: data.value.email,
      mobile: data.value.mobile,
      telephone: data.value.telephone,
      },{ headers });
        Object.assign(errorBag, { errors: '' });
        success.value = response.data;
        return response.data;
    }catch (e){
      if (e.response.data) {
        Object.assign(errorBag, e.response.data);
      }
    }finally{
        pending.value = false;
    }
};

</script>
<template>
  <div>
    <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
      <div class="w-full">
        <form @submit.prevent="handleEditContact">
          <atom-alert v-if="success.message" class="mt-4 bg-green-500 border-green-500 text-white">{{ success.message }}</atom-alert>
          <label class="block text-sm">
            <span class="text-gray-700 white:text-gray-400">Name</span>
            <atom-input 
                v-model="data.name" 
                type="text" 
                placeholder="Name" 
                class="block w-full"/>
                <li class="text-red-500 list-none" v-for="error in errorBag.errors?.name" :key="error">
                  {{ error }}
                </li>
          </label>
          <label class="block text-sm">
            <span class="text-gray-700 white:text-gray-400">Email</span>
            <atom-input
              v-model="data.email"
              type="text"
              placeholder="Email"
              class="block w-full"/>
              <li class="text-red-500 list-none" v-for="error in errorBag.errors?.email" :key="error">
                  {{ error }}
                </li>
          </label>
          <label class="block text-sm">
            <span class="text-gray-700 white:text-gray-400">Mobile</span>
            <atom-input
              v-model="data.mobile"
              type="text"
              placeholder="Mobile"
              class="block w-full"
            />
            <li class="text-red-500 list-none" v-for="error in errorBag.errors?.mobile" :key="error">
                  {{ error }}
            </li>
          </label>
          <label class="block text-sm">
            <span class="text-gray-700 white:text-gray-400">Telephone</span>
            <atom-input 
                v-model="data.telephone" 
                type="text" 
                placeholder="Telephone" 
                class="block w-full"/>
                <li class="text-red-500 list-none" v-for="error in errorBag.errors?.telephone" :key="error">
                  {{ error }}
                </li>
          </label>
          <atom-button class="mt-2 text-white" :disabled="pending" name="submit">
            {{ pending ? "Loading..." : "Submit" }}
          </atom-button>
        </form>
      </div>
    </div>
  </div>
</template>
