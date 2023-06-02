<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    tableHeader: {
        type: Array,
        default: () => [],
    },
    isLoading: {
        type: Boolean,
    }
});
</script>

<template>
    <table class="w-full whitespace-no-wrap">
        <thead>
            <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b white:border-gray-700 bg-gray-50 white:text-gray-400 white:bg-gray-800">
                <th v-for="(item, index) in tableHeader" :key="index" class="px-4 py-3">{{item.title}}</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y white:divide-gray-700 white:bg-gray-800">
            <Molecule-TableLoader v-if="isLoading"/>
            <tr v-for="(item, index) in items" :key="index" class="text-gray-700 white:text-gray-400">
                <td v-for="x in item" :key="x" class="px-4 py-3 text-sm">
                    {{ x }}
                </td>
            </tr>
        </tbody>
    </table>
</template>