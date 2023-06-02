<script setup>
import { useUserAuth } from '~/stores/userAuth'
const router = useRouter();
definePageMeta({
  layout: false,
  middleware: 'auth'
});

const { getCookie, login, logout, errorBag ,userAuthToken  } = useUserAuth();

// if(userAuthToken){
//   router.push('/')
// }

const user = ref({
  email: '',
  password: ''
})

onMounted(async () => {
  await getCookie();
});

</script>

<template>
  <div class="flex items-center min-h-screen p-6 bg-gray-50 white:bg-gray-900">
    <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl white:bg-gray-800">
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <div class="h-32 md:h-auto md:w-1/2">
          <img aria-hidden="true" class="object-cover w-full h-full white:hidden" src="../assets/svg/undraw_getting_coffee_re_f2do_1.svg"
            alt="Office" />
          <img aria-hidden="true" class="hidden object-cover w-full h-full white:block" src="../assets/svg/undraw_getting_coffee_re_f2do_1.svg"
            alt="Office" />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <form @submit.prevent="() => login(user)">
              <h1 class="mb-4 text-xl font-semibold text-gray-700 white:text-gray-200">
                Login
              </h1>
              <label class="block text-sm">
                <span class="text-gray-700 white:text-gray-400">Email</span>
                <atom-input
                 v-model="user.email"
                  type="text"
                  placeholder="Email"
                  class="block w-full mt-1 text-sm light:border-gray-600 light:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple light:text-gray-300 light:focus:shadow-outline-gray form-input"
                  :class="{
                      'border-1 border-red-500 focus:border-red-500': errorBag.errors?.email,
                    }" />
                <li class="text-red-500 list-none" v-for="error in errorBag.errors?.email" :key="error">
                  {{ error }}
                </li>
              </label>
              <label class="block mt-4 text-sm">
                <span class="text-gray-700 white:text-gray-400">Password</span>
                  <atom-input
                  v-model="user.password"
                  type="password"
                  placeholder="Password"
                  class="block w-full mt-1 text-sm light:border-gray-600 light:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple light:text-gray-300 light:focus:shadow-outline-gray form-input"
                  :class="{
                    'border-1 border-red-500 focus:border-red-500': errorBag.errors?.password,
                  }" />
                <li class="text-red-500 list-none" v-for="error in errorBag.errors?.password" :key="error">
                  {{ error }}
                </li>
              </label>
              <span class="text-red-500">{{ errorBag.errors != null ? '' : errorBag.message }}</span>
                <atom-button
                 type="submit"
                 class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                 >Login</atom-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
