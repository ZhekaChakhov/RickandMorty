<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container p-7">
        <NuxtLink to="/">
          <img src="/Rick_and_Morty.svg" alt="logo" class="w-1/4 mx-auto"/>
        </NuxtLink>
      </nav>
    </header>
    <div class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4 text-2xl">
        <li><NuxtLink to="/" class="p-3 rounded-md inline-block font-bold">Search</NuxtLink></li>
        <li><NuxtLink to="/1" class="p-3 rounded-md inline-block font-bold">All characters</NuxtLink></li>
      </ul>
    </div>
    <div class="container mx-auto p-6">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>