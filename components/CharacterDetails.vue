<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="`${character.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-5xl mt-7 mb-16 text-green-500">{{ character.name }}</h2>
        <p class="text-3xl mb-3 text-blue-600 font-semiboldbold">
          Species: {{ character.species }}
        </p>
        <p class="text-3xl mb-3 text-blue-600 font-semiboldbold">
          Location: {{ location }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { character, location } = defineProps(['character', 'location']);
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>

