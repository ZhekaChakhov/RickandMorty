<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`${character.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ character.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { character } = defineProps(['character']);
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>