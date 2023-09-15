<template>
  <div class="card text-center">
    <img :src="`${character.image}`" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ character.name }}</p>
    <NuxtLink :to="`/characters/${character.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { character } = defineProps(['character']);
</script>

<style scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>