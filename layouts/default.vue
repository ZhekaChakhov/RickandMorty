<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container p-7">
        <NuxtLink to="/">
          <img src="/Rick_and_Morty.svg" alt="logo" class="w-1/4 mx-auto"/>
        </NuxtLink>
      </nav>
    </header>
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