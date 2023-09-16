<template>
  <div>
    <CharacterDetails :character="character" :location="location" />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useIdStore } from "~/stores/IdStore";

const { id } = useRoute().params;

const idStore = useIdStore();

const character = computed(() => {
  return idStore.character;
});
const location = computed(() => {
  return idStore.location;
});

onMounted(() => {
  idStore.fetchCharacter(id);
});

</script>