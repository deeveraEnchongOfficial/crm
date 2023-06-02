<script setup>
import { useUserAuth } from "~/stores/userAuth";
definePageMeta({
  middleware: 'auth'
})
const { userAuthToken } = useUserAuth()
const { $upsale } = useNuxtApp()
const { params } = useRoute();
const inquiries = ref([])
const headers = { Authorization: `Bearer ${userAuthToken}`}

const fetchData = async () => {
  try {
    const response = await $upsale.get(`/api/inquiries/${params.id}`, { headers });
    inquiries.value = response.data.data
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
}

const data = await fetchData();

</script>

<template>
  <div>
    <div class="container grid px-6 mx-auto">
      <h2 class="my-6 text-2xl font-semibold text-gray-700 white:text-gray-800">
        Inquiry Listing
      </h2>
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">

        <MoleculeCard>
          {{ data }}
        </MoleculeCard>

      </div>
    </div>
  </div>
</template>