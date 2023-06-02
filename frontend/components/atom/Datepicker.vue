<script setup>
const props = defineProps({
  modelValue: { type: String },
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const focus = () => {
  this.$refs.input.focus();
};

defineExpose({
  inputValue,
  focus,
  emit,
});
</script>

<template>
  <div class="relative max-w-sm">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 light:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"></path>
      </svg>
    </div>
    <input :value="inputValue" @input="emit('update:modelValue', $event.target.value)" datepicker type="date"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
      placeholder="Select date">
  </div>
</template>