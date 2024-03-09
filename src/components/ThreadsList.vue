<script setup lang="ts">
import { ChatBubbleLeftIcon, CheckCircleIcon } from "@heroicons/vue/24/outline";
import { formatDistance } from "date-fns";
import type { Author, Thread } from "~/types";

defineProps<{
  threads: Thread[]
}>();

function getThreadLink (thread: Thread) {
  return `/thread/${thread.id}`;
}

function formattedPostedDate (thread: Thread) {
  return formatDistance(new Date(thread.postedDate), new Date());
}

function commenters (thread: Thread): Author[] {
  const authorSet: Set<string> = new Set();
  const result: Author[] = [];

  for (const message of thread.messages) {
    if (!authorSet.has(message.author.id)) {
      authorSet.add(message.author.id);
      result.push(message.author);
    }
  }

  return result;
}

</script>

<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li
      v-for="thread in threads"
      :key="thread.id"
      class="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
      <div>
        <p class="text-sm font-semibold leading-6 text-gray-900">
          <NuxtLink :to="getThreadLink(thread)" class="hover:underline">
            {{ thread.title }}
          </NuxtLink>
        </p>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p>
            {{ thread.author.name }}
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p>
            <time :datetime="thread.postedDate">{{ formattedPostedDate(thread) }}</time>
          </p>
        </div>
      </div>
      <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
        <div class="flex -space-x-0.5">
          <dt class="sr-only">
            Commenters
          </dt>
          <dd v-for="commenter in commenters(thread)" :key="commenter.id">
            <img
              class="h-6 w-6 rounded-full bg-gray-50 ring-2 ring-white"
              :src="commenter.imageUrl"
              :alt="commenter.name">
          </dd>
        </div>
        <div class="flex w-16 gap-x-2.5">
          <dt>
            <span class="sr-only">Total replies</span>
            <ChatBubbleLeftIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
          </dt>
          <dd class="text-sm leading-6 text-gray-900">
            {{ thread.messages.length }}
          </dd>
        </div>
      </dl>
    </li>
  </ul>
</template>

<style scoped>

</style>
