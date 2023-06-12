<script setup>
const { $prodash } = useNuxtApp()
const router = useRouter();
const isToggled = ref(true)
const handleToggle = (newValue) => {
  isToggled.value = newValue
}
</script>
<template>
  <div>
    <div class="flex h-screen bg-gray-50 while:bg-gray-900" :class="{ 'overflow-hidden': isToggled }">
      <OrganismAside v-if="isToggled" />
      <div class="flex flex-col flex-1 w-full">
        <OrganismNavbar :isToggled="isToggled" @toggle="handleToggle" />
        <main class="h-full overflow-y-auto">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
