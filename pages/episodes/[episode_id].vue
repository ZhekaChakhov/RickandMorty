<template>
  <div>
    <EpisodeDetails :episode="episode" :ep_characters="ep_characters" />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useEpisodeStore } from "~/stores/EpisodeStore";

const { episode_id } = useRoute().params;

const episodeStore = useEpisodeStore();

const episode = computed(() => {
  return episodeStore.episode;
});
const ep_characters = computed(() => {
  return episodeStore.ep_characters;
});

onMounted(() => {
  episodeStore.fetchEpisode(episode_id);
});

</script>