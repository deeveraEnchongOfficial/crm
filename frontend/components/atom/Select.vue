<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const select = ref(null);

const emit = defineEmits(["update:modelValue"]);

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit("update:modelValue", val);
  },
});

const handleChange = (e) => {
  select.value = e.target.value;
  emit("update:modelValue", select.value);
};

const options = computed(() => {
  return props.items.map((item) => {
    return item instanceof Object ? item : { value: item, label: item };
  });
});

defineExpose({
  modelValue,
  options,
});
</script>

<template>
  <select class="block w-full mt-1 text-sm light:text-gray-300 light:border-gray-600 light:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple light:focus:shadow-outline-gray" id="select" ref="select" :value="modelValue" @change="handleChange">
    <option disabled value="">
      <slot name="default-label">Please Select</slot>
    </option>
    <template v-for="option in options" :key="option.value">
      <option :value="option.id ? option.id : option.value">
        {{ option.name ? option.name : option.label }}
      </option>
    </template>
  </select>
</template>

<!-- <style lang="scss" scoped>
#select {
  @apply block rounded border-gray-200 focus:border-amber-300 focus:ring focus:ring-amber-300 focus:ring-opacity-50;
}
</style> -->
