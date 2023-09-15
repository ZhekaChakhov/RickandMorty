<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="ch of characters">
        <CharacterCard :character="ch" />
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div>
      <nav v-for="i in arr" 
      class="isolate inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination">
        <NuxtLink
          :to="`${i}`"
          href="#"
          :class="['regular', { active: pages === i }]">
          {{i}}
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { usePagesStore } from "~/stores/PagesStore";

const arr = [];

for (let j = 1; j < 43; j++) {
  arr.push(j)
}

const { pages } = useRoute().params;

const pagesStore = usePagesStore();

const characters = computed(() => {
  return pagesStore.characters;
});
onMounted(() => {
  pagesStore.fetchCharacters(pages);
});

</script>

<style scoped>
.regular {
  display: inline-flex; 
  position: relative; 
  padding-top: 0.5rem;
  padding-bottom: 0.5rem; 
  padding-left: 1rem;
  padding-right: 1rem; 
  align-items: center; 
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); 
  --tw-ring-inset: inset; 
  --ring-color: #D1D5DB; 
  font-size: 0.875rem;
  line-height: 1.25rem; 
  font-weight: 600; 
  color: #111827; 
}
.regular:hover {
 background-color: #F9FAFB; 
 }

 .active {
  z-index: 10; 
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); 
  --tw-ring-inset: inset; 
  --ring-color: #D1D5DB; 
  color: #ffffff; 
  background-color: #4F46E5;
 }
  .active:hover {
  background-color: #F9FAFB; 
 }
</style>