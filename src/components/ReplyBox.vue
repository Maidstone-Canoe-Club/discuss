﻿<script setup lang="ts">
import { PaperClipIcon } from "@heroicons/vue/20/solid";

</script>

<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <img
        class="inline-block h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="">
    </div>
    <div class="min-w-0 flex-1">
      <form action="#" class="relative">
        <div
          class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label for="comment" class="sr-only">Add your comment</label>
          <textarea
            id="comment"
            rows="3"
            name="comment"
            class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Add your comment..." />

          <!-- Spacer element to match the height of the toolbar -->
          <div class="py-2" aria-hidden="true">
            <!-- Matches height of button in toolbar (1px border + 36px content height) -->
            <div class="py-px">
              <div class="h-9" />
            </div>
          </div>
        </div>

        <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
          <div class="flex items-center space-x-5">
            <div class="flex items-center">
              <button
                type="button"
                class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                <PaperClipIcon class="h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Attach a file</span>
              </button>
            </div>
          </div>
          <div class="flex-shrink-0">
            <button
              type="submit"
              class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
