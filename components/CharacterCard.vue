<template>
  <div class="card text-center">
    <img :src="`${character.image}`" class="thumb" />
    <NuxtLink :to="`/characters/${character.id}`">
      <p class="font-bold text-green-500 m-2 truncate text-2xl">{{ character.name }}</p>
    </NuxtLink>
    <p class="font-bold text-gray-500 m-2 truncate text-xl">{{ character.species }}</p>
    <div v-if="len">
      <div v-for="i in arr">
        <p class="font-bold text-gray-500 m-2 truncate text-xl">
          <NuxtLink :to="`/episodes/${character.episode[i].slice(40)}`">
            <p class="font-bold text-gray-500 m-2 truncate text-xl">
              Episode number {{ character.episode[i].slice(40) }}
            </p>
          </NuxtLink>
        </p>
      </div>
    </div>
    <div v-else>
      <div v-for="ep in character.episode">
        <NuxtLink :to="`/episodes/${ep.slice(40)}`">
            <p class="font-bold text-gray-500 m-2 truncate text-xl">
              Episode number {{ ep.slice(40) }}
            </p>
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { character } = defineProps(['character']);
  const arr = [0,1,2,3,4];

  let len = true;

  if (character.episode.length < 5) {
    len = false;
  }

</script>

<style scoped>
  .thumb {
    margin: 0 auto;
  }
</style>