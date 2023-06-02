<script setup>
const props = defineProps({
  iconName: {
    type: String,
    default: "",
  },
});
const { [`${props.iconName}`]: icon } = await import("@heroicons/vue/24/outline");
</script>
<template>
  <component :is="icon" />
</template>