<template>
  <div class="card">
    <div>
      <div class="p-7">
        <h2 class="text-5xl mt-7 mb-16 text-green-500">{{ episode.name }}</h2>
        <p class="text-3xl mb-3 text-blue-600 font-semiboldbold">
          Premier Date: {{ episode.air_date }}
        </p>
        <div class="grid grid-cols-4 gap-5">
          <div v-for="ch of characters">
            <img :src="`${ch.image}`" class="thumb" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useIdStore } from "~/stores/IdStore";

const { episode, ep_characters } = defineProps(['episode', 'ep_characters']);

const parseId = (str) => {
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if ( !isNaN(str[i])) {
      num += str[i];
    }
  }
  return +num;
};

const idStore = useIdStore();

const characters = computed(() => {
  return idStore.character;
});

onMounted(() => {
  let id = [];

  for (let item of ep_characters) {
    let i = parseId(item);
    id.push(i);
  }

  id = id.join();
  idStore.fetchCharacter(id);
});
</script>

<style scoped>
  img {
    max-width: 400px;
  }
  .thumb {
    margin: 0 auto;
  }
</style>

