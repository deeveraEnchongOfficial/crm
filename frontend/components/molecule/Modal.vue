<script setup>
const props = defineProps({
  title: { type: String },
});
const alert = useAlert();
const showModal = useModal();
defineExpose({
  showModal,
  alert,
});
</script>

<template>
  <div>
    <!-- Main modal -->
    <div
      tabindex="-1"
      v-show="showModal"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex items-start justify-between p-4 border-b rounded-t">
            <h3 class="text-xl font-semibold text-gray-900">
              {{ title }}
            </h3>
            <button
              type="button"
              @click="showModal = false"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 space-y-4">
            <molecule-alert
              :show="!alert.message"
              :type="alert.type"
              :message="alert.message"
              class="max-w-5xl mx-auto mt-6"
            />
            <slot name="body" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="showModal"
      class="fixed inset-0 z-[90] bg-gray-900 bg-opacity-50 :bg-opacity-80 backdrop-blur-sm"
    ></div>
  </div>
</template>
