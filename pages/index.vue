<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="ch of characters">
        <CharacterCard :character="ch" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useCharacterStore } from "~/stores/CharacterStore";

const characterStore = useCharacterStore();

const characters = computed(() => {
  return characterStore.characters;
});

onMounted(() => {
  characterStore.fetchCharacters();
});

</script>