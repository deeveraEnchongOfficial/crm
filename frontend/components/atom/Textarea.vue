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
  <textarea
    ref="textarea"
    :value="inputValue"
    @input="emit('update:modelValue', $event.target.value)"
    class="block w-full mt-1 text-sm light:text-gray-300 light:border-gray-600 light:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple light:focus:shadow-outline-gray"
    ></textarea>
</template>
