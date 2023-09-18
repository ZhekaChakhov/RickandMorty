import { defineStore } from "pinia";
import axios from "axios";

const url = "https://rickandmortyapi.com/api/episode/";

export const useEpisodeStore = defineStore("episodeStore", {
	state: () => ({
		episode: {},
		ep_characters: [],
	}),
	actions: {
		async fetchEpisode(id) {
			try {
				const data = await axios.get(url + id);
				this.episode = data.data;
				this.ep_characters = data.data.characters;
				// console.log(data.data.characters);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
	persist: {
		storage: persistedState.localStorage,
	},
});
