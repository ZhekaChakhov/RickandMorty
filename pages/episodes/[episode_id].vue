<template>
  <div>
    <EpisodeDetails :episode="episode" />
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

onMounted(() => {
  episodeStore.fetchEpisode(episode_id);
});

</script>