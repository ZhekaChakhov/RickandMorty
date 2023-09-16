<template>
  <div class="card">
    <div>
      <div class="p-7">
        <h2 class="text-5xl mt-7 mb-16 text-green-500">{{ episode.name }}</h2>
        <p class="text-3xl mb-3 text-blue-600 font-semiboldbold">
          Premier Date: {{ episode.air_date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { episode } = defineProps(['episode']);
</script>

<style scoped>
  img {
    max-width: 400px;
  }
</style>

