<script setup lang="ts">
import { subHours, subDays } from "date-fns";
import type { Author, List } from "~/types";
import type { Tab } from "~/components/ListTabs.vue";

const authors: Author[] = [
  {
    id: "74dc9593-9e49-4d08-b47b-353eb4c72c83",
    name: "Tom Cook",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "6da55481-5a3d-40c1-88a5-ffe15ad33867",
    name: "Emma Dorsey",
    imageUrl: "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "12f3b9a9-00aa-4e22-a1e4-62d40bf591c7",
    name: "Lindsay Walton",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "851421f3-bfcf-4f73-a7b6-e2f51f83ff6c",
    name: "Benjamin Russel",
    imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "d3e36dca-bca0-4c8b-851f-acaa73935dd4",
    name: "Hector Gibbons",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const data: List[] = [
  {
    list: "cdg",
    name: "CDG",
    threads: [
      {
        id: "f2c0ae44-ffc5-44b7-b59d-1cb0a5e8f045",
        title: "Whitewater trip",
        postedDate: subHours(new Date(), 7),
        author: authors[0],
        messages: [
          {
            content: "Hello world",
            postedDate: subHours(new Date(), 7),
            author: authors[0]
          },
          {
            content: "A reply to the message",
            postedDate: subHours(new Date(), 6),
            author: authors[1]
          }
        ]
      },
      {
        id: "37566600-aa96-4b6b-a8b9-c36761c410bb",
        title: "Lee Valley hire question?",
        postedDate: subDays(new Date(), 3),
        author: authors[1],
        messages: [
          // {},
          // {},
          // {},
          // {}
        ]
      }
    ]
  },
  {
    list: "committee",
    name: "Committee",
    threads: [
      {
        id: "2fb15fe6-bb7a-4217-8f88-bf9af3e843a5",
        title: "Important meeting",
        postedDate: subDays(new Date(), 14),
        author: {
          name: "Alice Jones",
          imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        messages: [
          {},
          {}
        ]
      }
    ]
  }
];

const tabs = computed(() => data.map(d => ({
  id: d.list,
  name: d.name,
  count: d.threads.reduce((previousValue, currentValue) => previousValue + currentValue.messages.length, 0)
})));

const selectedTab = ref<Tab>(tabs.value[0]);
const selectedList = computed(() => data.find(d => d.list === selectedTab.value.id));

</script>

<template>
  <PageContent>
    <ListTabs
      v-model="selectedTab"
      :tabs="tabs" />
    <ThreadsList :threads="selectedList.threads" />
  </PageContent>
</template>

<style scoped>

</style>
