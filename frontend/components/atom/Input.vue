<script setup>
const props = defineProps({
  modelValue: { type: String },
  type: {
    type: String,
    default: "text",
  },
});

const classes = {
  text: "block mt-1 text-sm white:border-gray-600 white:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple white:text-gray-300 white:focus:shadow-outline-gray",
  password:
    "block mt-1 text-sm white:border-gray-600 white:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple white:text-gray-300 white:focus:shadow-outline-gray",
};

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
  <input
    ref="input"
    :type="props.type"
    :value="inputValue"
    @input="emit('update:modelValue', $event.target.value)"
    :class="classes[type]"
  />
</template>
