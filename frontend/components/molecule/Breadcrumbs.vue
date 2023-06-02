<script setup>
const route = useRoute();

const breadcrumbs = computed(() => {
  const pathArray = route.path.split("/");
  pathArray.shift();
  return pathArray.reduce((breadcrumbArray, path, idx) => {
    let to = breadcrumbArray[idx - 1]
      ? breadcrumbArray[idx - 1].to + "/" + path
      : "/" + path;
    if (idx === pathArray.length - 1) {
      to = undefined;
    }
    breadcrumbArray.push({
      to,
      title: path,
    });
    return breadcrumbArray;
  }, []);
});

defineExpose({
  breadcrumbs,
});
</script>

<template>
  <nav
    class="text-sm breadcrumb not-prose text-zinc-900"
    aria-label="breadcrumb"
  >
    <ul>
      <li><a href="/">Home</a></li>
      <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb">
        <nuxt-link :to="breadcrumb.to">
          &#10217; {{breadcrumb.title}}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.breadcrumb {
  @apply mx-auto mt-2 mb-6 md:mb-1 w-full max-w-5xl md:px-0 px-3;
}
.breadcrumb ul li {
  @apply inline;
}
.breadcrumb ul li a {
  @apply capitalize opacity-70;
}
.breadcrumb ul li span {
  @apply opacity-70;
}
.breadcrumb ul li:not(:last-child) a {
  @apply hover:opacity-100;
}
</style>
