<script setup>
</script>

<template>
  <header class="flex items-center">
    <slot name="logo">
      <img
        id="logo"
        src="~/assets/images/prodash.jpg"
        width="32px"
        height="32px"
        class="object-cover w-10 h-10 rounded-full"
      />
    </slot>
  </header>
</template>