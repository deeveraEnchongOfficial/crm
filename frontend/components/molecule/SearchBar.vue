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
    <div class="flex justify-center flex-1 lg:mr-32">
        <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div class="absolute inset-y-0 flex items-center pl-2">
                <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
                <input id="input"
                    ref="input"
                    :value="inputValue"
                    @input="emit('update:modelValue', $event.target.value)"
                    class="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md white:placeholder-gray-500 white:focus:shadow-outline-gray white:focus:placeholder-gray-600 white:bg-gray-700 white:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input" />   
        </div>
    </div>
</template>