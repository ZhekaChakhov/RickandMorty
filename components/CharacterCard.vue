<template>
  <div class="card text-center">
    <img :src="`${character.image}`" class="thumb" />
    <NuxtLink :to="`/characters/${character.id}`">
      <p class="font-bold text-green-500 m-2 truncate text-2xl">{{ character.name }}</p>
    </NuxtLink>
    <p class="font-bold text-gray-500 m-2 truncate text-xl">{{ character.species }}</p>
    <div v-if="character.episode.length >= 5">
      <div v-for="i in arr">
        <p class="font-bold text-gray-500 m-2 truncate text-xl">
          <NuxtLink :to="`/episodes/${parseId(character.episode[i])}`">
            <p class="font-bold text-gray-500 m-2 truncate text-xl">
              Episode number {{ parseId(character.episode[i]) }}
            </p>
          </NuxtLink>
        </p>
      </div>
    </div>
    <div v-else>
      <div v-for="ep in character.episode">
        <NuxtLink :to="`/episodes/${parseId(ep)}`">
            <p class="font-bold text-gray-500 m-2 truncate text-xl">
              Episode number {{ parseId(ep) }}
            </p>
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { character } = defineProps(['character']);
const arr = [0,1,2,3,4];

const parseId = (str) => {
  let num = "";

  for (let i = 0; i < str.length; i++) {
    if ( !isNaN(str[i])) {
      num += str[i];
    }
  }

  return num;
};

</script>

<style scoped>
  .thumb {
    margin: 0 auto;
  }
</style>