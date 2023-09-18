<template>
  <form @submit.prevent="searchStore.getCharacters(searchCharacter)">
    <input
      type="text"
      class="border w-full h-10 mb-5 px-2.5 py-0 rounded-[10px] border-solid border-[#e7e7e7]"
      placeholder="Input character"
      v-model="searchCharacter" />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else class="grid grid-cols-4 gap-5">
    <CharacterCard
      v-for="character of searchStore.characters"
      :key="character.id"
      :character="character"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "~/stores/SearchStore";

const searchStore = useSearchStore();
const searchCharacter = ref("");
</script>

<style scoped>
</style>