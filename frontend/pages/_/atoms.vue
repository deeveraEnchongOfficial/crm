<script setup>
definePageMeta({
    middleware: 'not-auth'
})
const showModal = useModal();
const inputText = ref();
const inputRange = ref();
const options = ref([
    { value: "Option 1", label: "option1" },
    { value: "Option 2", label: "option2" },
    { value: "Option 3", label: "option3" },
]);
const tableHeader = ref([
    { title: "tableHeader1" },
    { title: "tableHeader2" },
    { title: "tableHeader3" },
])
const tableData = ref([
    { title: "tableData1",title2: "tableData2",title3: "tableData3" },
    { title: "tableData1",title2: "tableData2",title3: "tableData3" },
    { title: "tableData1",title2: "tableData2",title3: "tableData3" },
])
</script>

<template>
    <div>
        <h3>Form Elements</h3>
        <!-- <form>
                    <label for="input-text" class="flex flex-col gap-1 ml-1">
                        <span>Text</span>
                        <atom-input name="inputText" type="text" v-model="inputText" class="ml-2 w-96" />
                    </label>
                    <label for="input-text" class="flex flex-col gap-1 ml-1">
                        <span>Range</span>
                        <atom-input name="inputRange" type="range" v-model="inputRange" class="ml-2 w-96" />
                    </label>
                </form> -->

        <form class="grid grid-cols-2 gap-4">
            <label for="input-text" class="flex flex-col gap-1">
                <span>Text</span>
                <atom-input name="inputText" type="text" v-model="inputText" class="ml-2 w-96" />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Number</span>
                <atom-input name="inputNumber" type="number" v-model="inputNumber" class="ml-2 w-96" />
            </label>
            <label for="input-month" class="flex flex-col gap-1">
                <span>Month picker</span>
                <atom-input name="inputMonth" type="month" v-model="inputMonth" class="ml-2 w-96" />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>week</span>
                <atom-input name="inputNumber" type="week" v-model="inputNumber" class="ml-2 w-96" />
            </label>
            <label for="input-datetime" class="flex flex-col gap-1">
                <span>Date and Time picker</span>
                <atom-input name="inputDatetime" type="datetime-local" v-model="inputDatetime" class="ml-2 w-96" />
            </label>
            <label for="input-date" class="flex flex-col gap-1">
                <span>Date picker</span>
                <atom-input name="inputDate" type="date" v-model="inputDate" class="ml-2 w-96" />
            </label>
            <label for="input-email" class="flex flex-col gap-1">
                <span>Email</span>
                <atom-input name="inputEmail" type="email" v-model="inputEmail" class="ml-2 w-96" />
            </label>
            <label for="input-password" class="flex flex-col gap-1">
                <span>Password</span>
                <atom-input name="inputPassword" type="password" v-model="inputPassword" class="ml-2 w-96" />
            </label>
            <label for="input-range" class="flex flex-col gap-1">
                <span>Range</span>
                <atom-input name="inputRange" type="range" v-model="inputRange" class="ml-2 w-96" />
            </label>
            <label for="input-color" class="flex flex-col gap-1">
                <span>Color picker</span>
                <atom-input name="inputColor" type="color" v-model="inputColor" class="ml-2 w-96" />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>time</span>
                <atom-input name="inputNumber" type="time" v-model="inputNumber" class="ml-2 w-96" />
            </label>
            <label for="input-file" class="flex flex-col gap-1">
                <span>File</span>
                <atom-input name="inputFile" type="file" v-model="inputFile" class="ml-2 w-96" />
            </label>
            <label for="input-checkbox" class="flex flex-col gap-1">
                <span>Checkbox</span>
                <atom-input name="inputCheckbox" type="checkbox" v-model="inputCheckbox" class="ml-2" />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>radio</span>
                <atom-input name="inputNumber" type="radio" v-model="inputNumber" class="ml-2" />
            </label>
        </form>
        <hr class="mt-5">
        <h3>Atom Components</h3>
        <form class="grid grid-cols-2 gap-4">
            <label for="input-text" class="flex flex-col gap-1">
                <span>Textarea</span>
                <atom-textarea name="inputText" type="text" v-model="inputText" class="ml-2 w-96" />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Alert</span>
                <atom-alert class="ml-2 w-96">This is alert</atom-alert>
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Select</span>
                <atom-select v-model="input" class="ml-2 w-96" :items="options" />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Seacrh Bar</span>
                <MoleculeSearchBar class="ml-2 w-96" />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Button</span>
                <atom-button name="" class="ml-2 w-96">Button</atom-button>
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Modal</span>
                <atom-button @click="showModal = true" name="" class="ml-2 w-96">modal</atom-button>
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Logo</span>
                <atom-logo />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Avatar</span>
                <atom-avatar />
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Card 1</span>
                <MoleculeCard>
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    This is a card
                                </a>
                            </h1>
                        </header>
                    </article>
                </MoleculeCard>
            </label>
            <label for="input-number" class="flex flex-col gap-1">
                <span>Card 2</span>
                <MoleculeCard>
                    <article class="overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    This is a card
                                </a>
                            </h1>
                        </header>
                    </article>
                </MoleculeCard>
            </label>
        </form>
        <br>
        <MoleculeCard>
            <Molecule-Table :items="tableData" :tableHeader="tableHeader" />
        </MoleculeCard>
        <MoleculePagination :total="100" :perPage="5" :currentPage="1" @updatePage="updatePage" />

        <Teleport to="body">
            <Molecule-Modal v-show="showModal" title="myModal">
                <template #body>
                    <div class="flex flex-col md:mx-auto md:gap-x-3 md:flex-row">
                        <contact-form v-if="showModal" class="md:w-1/2" />
                        <div class="flex flex-col justify-between md:w-1/2">
                            <p>test Modal</p>
                        </div>
                    </div>
                </template>
            </Molecule-Modal>
        </Teleport>

    </div>
</template>