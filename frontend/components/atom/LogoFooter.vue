<script setup>
const config = useRuntimeConfig();
const { isScrollY } = useScroll();
</script>

<template>
  <div class="flex flex-col items-center md:-tranzinc-y-4">
    <img
      id="logo"
      src="~/assets/images/logo.png"
      :alt="config.public.site.name"
      width="32px"
      height="32px"
      class="mx-auto -tranzinc-x-2"
    />
    <span class="text-3xl font-extrabold lowercase">{{
      config.public.site.name
    }}</span>
    <span class="uppercase trking-wide">Building better to soar</span>
  </div>
</template>

<style scoped>
#logo {
  height: 32px;
}
</style>
