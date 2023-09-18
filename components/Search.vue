<template>
  <form @submit.prevent="searchStore.getCharacters(searchCharacter + selectCharacter)">
    <input
      type="text"
      class="border w-full h-10 mb-5 px-2.5 py-0 rounded-[10px] border-solid border-[#e7e7e7]"
      placeholder="Input character"
      v-model="searchCharacter" />
    <select
      v-model="selectCharacter"
      class="w-32 h-9 border text-lg bg-[#eee] shadow-md rounded-md border-solid border-[#999]">
      <option disabled value="">Status:</option>
      <option value="&status=alive">Alive</option>
      <option value="&status=dead">Dead</option>
      <option value="&status=unknown">Unknown</option>
    </select>
    <button
      type="submit"
      class="bg-[#37df5c] w-24 h-9 text-sm cursor-pointer mx-2.5 my-0 rounded-lg hover:opacity-70">
      Search
    </button>
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
const selectCharacter = ref("");
</script>
<style scoped>
</style>