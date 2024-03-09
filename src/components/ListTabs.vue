<script setup lang="ts">

export type Tab = {
  id: string,
  name: string,
  count: string,
}

const emits = defineEmits(["update:modelValue"]);

const props = defineProps<{
  tabs: Tab[]
}>();

const selectedTab = defineModel<Tab>({ required: true });

function selectTab (tab: Tab) {
  selectedTab.value = tab;
}

function isTabSelected (tab: Tab) {
  return selectedTab.value.name === tab.name;
}

</script>

<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        <option v-for="tab in tabs" :key="tab.name" :selected="isTabSelected(tab)">
          {{ tab.name }} ({{ tab.count }})
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.name"
            :class="[isTabSelected(tab) ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700', 'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']"
            :aria-current="isTabSelected(tab) ? 'page' : undefined"
            @click="selectTab(tab)">
            {{ tab.name }}
            <span
              v-if="tab.count"
              :class="[isTabSelected(tab) ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900', 'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block']">{{
                tab.count
              }}</span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
