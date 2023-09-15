<template>
  <div class="card text-center">
    <img :src="`${character.image}`" class="thumb" />
    <NuxtLink :to="`/characters/${character.id}`">
      <p class="font-bold text-green-500 m-2 truncate text-2xl">{{ character.name }}</p>
    </NuxtLink>
    <p class="font-bold text-gray-500 m-2 truncate text-xl">{{ character.species }}</p>
  </div>
</template>

<script setup>
  const { character } = defineProps(['character']);
</script>

<style scoped>
  .thumb {
    margin: 0 auto;
  }
</style>