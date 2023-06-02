<script setup>
const route = useRoute();
const props = defineProps({
  native: {
    type: Boolean,
    default: true,
  },
  to: {
    type: String,
  },
  class: {
    type: [String, Object, Array],
  },
  extraProps: true,
});
const getParentPath = computed(() => {
  const pathArray = route.path.split("/");
  pathArray.shift();
  const getParentPath = pathArray.reduce((parentPathArray, path, idx) => {
    parentPathArray.push({
      to: parentPathArray[idx - 1]
        ? parentPathArray[idx - 1].to + "/" + path
        : "/" + path,
      title: path,
    });
    return parentPathArray;
  }, []);
  return getParentPath.filter((x) => typeof x !== undefined).shift();
});
const isActive = computed(() => {
  return getParentPath.value.to == props.to;
});
defineExpose({
  native: props.native,
  to: props.to,
  ...props,
  isActive,
  route,
});
</script>
<template>
  <nuxt-link>
    <slot />
  </nuxt-link>
</template>

<style scoped>
/* a.router-link-active {
      text-decoration: underline;
      text-decoration-thickness: 2.5px;
      text-underline-offset: 4px;
      z-index: 20;
      text-decoration-color: #f59e0b;
  } */
</style>
