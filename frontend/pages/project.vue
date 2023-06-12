<script setup>
definePageMeta({
  middleware: 'auth'
})
// const { $prodash } = useNuxtApp()

// const fetchData = async () => {
//   try {
//     const response = await $prodash.get("https://outsoar.ph/api/projects");
//     return response.data;
//   } catch (error) {
//     // console.error(error);
//   }
// };

// const services = await fetchData();

    const projects = ref([
    {
        title: "Project1",
        client: "client1",
        author: "author1",
        started_at: "2022-11-01T04:15:50.949Z",
        status: "On Progress",
        icon: "mdi-view-dashboard-outline"
    },
    {
        title: "Project1",
        client: "client1",
        author: "author1",
        started_at: "2022-11-01T04:15:50.949Z",
        status: "On Progress",
        icon: "mdi-view-dashboard-outline"
    },
    {
        title: "Project1",
        client: "client1",
        author: "author1",
        started_at: "2022-11-01T04:15:50.949Z",
        status: "On Progress",
        icon: "mdi-view-dashboard-outline"
    },
    {
        title: "Project1",
        client: "client1",
        author: "author1",
        started_at: "2022-11-01T04:15:50.949Z",
        status: "On Progress",
        icon: "mdi-view-dashboard-outline"
    },
    {
        title: "Project1",
        client: "client1",
        author: "author1",
        started_at: "2022-11-01T04:15:50.949Z",
        status: "On Progress",
        icon: "mdi-view-dashboard-outline"
    },
    ])

</script>

<template>
    <div>
      <div class="container grid px-6 mx-auto">
              <h2
                class="my-6 text-2xl font-semibold text-gray-700 white:text-gray-800"
              >
              Projects Listing
              </h2>
              <div class="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                <div class="w-full overflow-x-auto">
                  <table class="w-full whitespace-no-wrap">
                    <!-- <thead>
                      <tr
                        class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b white:border-gray-700 bg-gray-50 white:text-gray-400 white:bg-gray-800"
                      >
                        <th class="px-4 py-3">Name</th>
                        <th class="px-4 py-3">Email</th>
                        <th class="px-4 py-3">Subject</th>
                        <th class="px-4 py-3">Description</th>
                      </tr>
                    </thead> -->
                    <tbody
                      class="bg-white divide-y white:divide-gray-700 white:bg-gray-800"
                    >
                      <tr v-for="(project, index) in projects" :key="index" class="text-gray-700 white:text-gray-400">
                        <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <!-- Avatar with inset shadow -->
                          <div
                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              class="object-cover w-full h-full rounded-lg"
                              src="https://picsum.photos/600/400/?random"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p class="font-semibold">Client</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              {{project.client}}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <!-- Avatar with inset shadow -->
                          <div
                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              class="object-cover w-full h-full rounded-lg"
                              src="https://picsum.photos/600/400/?random"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p class="font-semibold">Author</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              {{project.author}}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                          <!-- Avatar with inset shadow -->
                          <div
                            class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
                          >
                            <img
                              class="object-cover w-full h-full rounded-lg"
                              src="https://picsum.photos/600/400/?random"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p class="font-semibold">Date Started</p>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              {{ project.started_at }}
                            </p>
                          </div>
                        </div>
                      </td>
                        <td class="px-4 py-3 text-xs">
                        <span
                          class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"
                        >
                          {{project.status}}
                        </span>
                      </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t white:border-gray-700 bg-gray-50 sm:grid-cols-9 white:text-gray-400 white:bg-gray-800"
                >
                  <span class="flex items-center col-span-3">
                    Showing 21-30 of 100
                  </span>
                  <span class="col-span-2"></span>
                  <!-- Pagination -->
                  <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                    <nav aria-label="Table navigation">
                      <ul class="inline-flex items-center">
                        <li>
                          <button
                            class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Previous"
                          >
                            <svg
                              aria-hidden="true"
                              class="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                          >
                            1
                          </button>
                        </li>
                        <li>
                          <button
                            class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                          >
                            2
                          </button>
                        </li>
                        <li>
                          <button
                            class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                          >
                            3
                          </button>
                        </li>
                        <li>
                          <button
                            class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                          >
                            4
                          </button>
                        </li>
                        <li>
                          <span class="px-3 py-1">...</span>
                        </li>
                        <li>
                          <button
                            class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                          >
                            8
                          </button>
                        </li>
                        <li>
                          <button
                            class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                          >
                            9
                          </button>
                        </li>
                        <li>
                          <button
                            class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                            aria-label="Next"
                          >
                            <svg
                              class="w-4 h-4 fill-current"
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </span>
                </div>
              </div>
            </div>
    </div>
  </template>