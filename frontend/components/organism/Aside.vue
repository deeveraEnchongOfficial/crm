<script setup>
const sidebarItems = ref([
    {
        title: "Dashboard",
        icon: "HomeIcon",
        to: "/",
    },
    {
        title: "Inquiries",
        icon: "DocumentTextIcon",
        to: "/inquiries",
    },
    {
        title: "Contacts",
        icon: "PhoneIcon",
        to: "/contacts",
    },
    // {
    //     title: "Projects",
    //     icon: "DocumentTextIcon",
    //     to: "/projects",
    // },
])

const route = useRoute();

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

const setActiveItem = () => {
    sidebarItems.value.forEach(item => {
        item.isActive = item.to === getParentPath.value.to;
    });
};

onMounted(() => {
    setActiveItem();
});

watch(() => route.path, () => {
    setActiveItem();
});

</script>

<template>
    <!-- Desktop sidebar -->
    <aside class="z-20 flex-shrink-0 w-64 overflow-y-auto bg-white shadow-md white:bg-gray-800 md:block">
        <div class="py-4 text-gray-500 white:text-gray-400">
            <nuxt-link class="ml-6 text-lg font-bold text-gray-800 white:text-gray-200" to="/">
                <button class="align-middle focus:shadow-outline-purple focus:outline-none">
                    <atom-logo />
                    </button>
                upSale
            </nuxt-link>
            <ul class="mt-6">
                <h4
              class="ml-6 text-sm font-semibold text-gray-300 white:text-gray-200"
            >
            Main Menu
            </h4>
            </ul>
            <ul v-for="(item, i) in sidebarItems" :key="i">
                <li class="relative px-6 py-3">
                    <nuxt-link
                    :class="{'bg-purple-900 text-white rounded-md px-3 py-3 text-sm font-medium': item.isActive}" 
                        class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 white:hover:text-gray-200 white:text-gray-100"
                        :to="item.to">
                        <atom-heroIcon :iconName="item.icon" class="w-5 h-5" />
                        <span class="ml-4">{{item.title}}</span>
                    </nuxt-link>
                </li>
            </ul>
            <div class="px-6 my-6">
            </div>
        </div>
    </aside>
</template>