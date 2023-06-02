<script setup>
const props = defineProps([
  'total',
  'perPage',
  'currentPage'
]);
const total = ref(props.total)
const perPage = ref(props.perPage)
const currentPage = ref(props.currentPage)

const start = computed(() => {
  return (currentPage.value - 1) * perPage.value + 1;
});

const end = computed(() => {
  let end = currentPage.value * perPage.value;
  if (end > total.value) {
    end = total.value;
  }
  return end;
});

const totalPages = computed(() => {
  return Math.ceil(total.value / perPage.value);
});

const pages = computed(() => {
  let pages = [];
  for (let i = 1; i <= totalPages.value; i++) {
    if (
      i === 1 ||
      i === totalPages.value ||
      (i >= currentPage.value - 2 && i <= currentPage.value + 2)
    ) {
      pages.push(i);
    } else if (
      pages[pages.length - 1] !== "..." &&
      i < currentPage.value - 2
    ) {
      pages.push("...");
    } else if (
      pages[pages.length - 1] === "..." &&
      i > currentPage.value + 2
    ) {
      pages.push("...");
    }
  }
  return pages;
});

const emit = defineEmits(['updatePage'])
const changePage = (page) => {
  totalPages.value = page;
  currentPage.value = page
  emit('updatePage', page)
}
</script>

<template>
  <div
    class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t light:border-gray-700 bg-gray-50 sm:grid-cols-9 light:text-gray-400 light:bg-gray-800">
    <span class="flex items-center col-span-3">
      Showing {{ start }}-{{ end }} of {{ total }} items
    </span>
    <span class="col-span-2"></span>
    <!-- Pagination -->
    <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
      <nav aria-label="Table navigation">
        <ul class="inline-flex items-center">
          <li>
            <button v-if="currentPage > 1" @click="changePage(currentPage - 1)"
              class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
              aria-label="Previous">
              <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd" fill-rule="evenodd"></path>
              </svg>
            </button>
          </li>
          <li>
            <button v-for="page in pages" :key="page" :class="{
              'text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600': currentPage === page,
              'opacity-50 disable': page === '...'
            }" @click="page !== '...' && changePage(page)"
              class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
              {{ page }}
            </button>
          </li>
          <li>
            <button v-if="currentPage < totalPages" @click="changePage(currentPage + 1)"
              class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
              <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" fill-rule="evenodd"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </span>
  </div>
</template>