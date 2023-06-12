<script setup>
</script>

<template>
  <header class="flex items-center">
    <slot name="avatar">
      <img id="avatar" src="~/assets/images/prodash.png" width="32px" height="32px" class="object-cover w-8 h-8 rounded" />
    </slot>
  </header>
</template>
