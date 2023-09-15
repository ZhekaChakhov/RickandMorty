<template>
  <div>
    <CharacterDetails :character="character" />
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
onMounted(() => {
  idStore.fetchCharacter(id);
});

</script>