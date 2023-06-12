<script setup>
import { useUserAuth } from "~/stores/userAuth";
definePageMeta({
  middleware: 'auth'
})

const { userAuthToken } = useUserAuth()
const headers = { Authorization: `Bearer ${userAuthToken}`}
const { $prodash } = useNuxtApp()
const limit = ref(10);
const currentPage = ref(1);
const contacts = ref([])
const isLoading = ref(false)
const deleteResponse = ref('')
const search = ref('');
const tableHeader = ref([
  { title: "Name" },
  { title: "Email" },
  { title: "Mobile" },
  { title: "Telephone" },
  { title: "Created_at" },
])
const updatePage = (newValue) => {
  currentPage.value = newValue
}

const fetchData = async () => {
  isLoading.value = true
  const token = userAuthToken;
  try {
    const response = await $prodash.get('/api/contacts', {
      params: {
        page: currentPage.value,
        perPage: limit.value,
        search: search.value
      },headers
    });
    contacts.value = response.data.data
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }finally{
    isLoading.value = false
  }
}

const deleteContact = async (id) => {
  if (confirm('Are you sure to delete this contact?')) {
    isLoading.value = true
    try{
      const response = await $prodash.delete('/api/contacts/'+ id , { headers });
      deleteResponse.value = response.data
      fetchData();
      return response.data;
    }catch(e){
      console.log(e.response.data)
    }finally{
      isLoading.value = false
    }
  }else{
    console.log('closed');
  }
}


const data = await fetchData();

fetchData();

watch(currentPage, async (val) => {
  await fetchData();
})

watch(search, async (val) => {
  await fetchData();
})

const isAction = ref(false)
const activeID = ref()


const toggleAction = (id) => {
    // isAction.value = !isAction.value
    if (isAction.value && activeID.value === id) {
      isAction.value = false;
      activeID.value = null;
    } else {
      isAction.value = true;
      activeID.value = id;
    }
}
</script>

<template>
  <div>
    <div class="container grid px-6 mx-auto">
      <h2 class="my-6 text-2xl font-semibold text-gray-700 white:text-gray-800">
        Contacts Listing
      </h2>
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <MoleculeSearchBar class="mt-2 ml-2 w-96" v-model="search"/>
          <atom-alert v-if="deleteResponse.message" class="mt-4 bg-red-500 border-red-500 text-white">{{ deleteResponse.message ? deleteResponse.message: null }}</atom-alert>  
          <MoleculeTableLoader v-if="isLoading" />
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b white:border-gray-700 bg-gray-50 white:text-gray-400 white:bg-gray-800">
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">Email</th>
                <th class="px-4 py-3">Mobile</th>
                <th class="px-4 py-3">Telephone</th>
                <th class="px-4 py-3">Company</th>
                <th class="px-4 py-3">created_at</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y white:divide-gray-700 white:bg-gray-800">
              <tr v-for="(contact, index) in contacts" :key="index" class="text-gray-700 white:text-gray-400">
                <td class="px-4 py-3 text-sm">
                  {{ contact.name }}
                </td>
                <td class="px-4 py-3 text-sm">
                  {{ contact.email }}
                </td>
                <td class="px-4 py-3 text-sm">
                  {{ contact.mobile }}
                </td>
                 <td class="px-4 py-3 text-sm">
                  {{ contact.telephone }}
                </td>
                <td class="px-4 py-3 text-sm">
                  {{ contact.company }}
                </td>
                <td class="px-4 py-3 text-sm">
                  {{ contact.created_at }}
                </td>
                <td>
                  <div class="relative px-5 pt-2">
                    <button class="rounded-md focus:ring-2 focus:outline-none" @click="toggleAction(contact.id)"
                      role="button" aria-label="option">
                      <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20"
                        height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                          stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                          stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                          stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
                    <div v-if="isAction && activeID === contact.id" class="absolute right-0 z-30 w-24 mr-6 bg-white shadow dropdown-content">
                      <nuxt-link :to="'/contacts/' + contact.id">
                      <atom-button  tabindex="0" class="w-full bg-white text-xs rounded-none cursor-pointer focus:outline-none hover:text-white">View</atom-button>                      
                      </nuxt-link>
                      <nuxt-link :to="'/contacts/edit/' + contact.id">
                      <atom-button  tabindex="0" class="w-full bg-white text-xs rounded-none cursor-pointer focus:outline-none hover:text-white">Edit</atom-button>                      
                      </nuxt-link>
                      <atom-button  tabindex="0" class="w-full bg-white text-xs rounded-none cursor-pointer focus:outline-none hover:bg-red-600 hover:text-white" :disabled="isLoading" name="submit" @click="deleteContact(contact.id)">{{ isLoading ? "Loading..." : "Delete" }}</atom-button>                      
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <Molecule-Table :items="contacts" :tableHeader="tableHeader" :isLoading="isLoading"/>-->
        </div>
        <MoleculePagination :total="data.total" :perPage="data.per_page" :currentPage="currentPage"
        @updatePage="updatePage" />
    </div>
  </div>
</div></template>