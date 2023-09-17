import { defineStore } from "pinia";
import axios from "axios";

const url = "https://rickandmortyapi.com/api/episode/";

export const useEpisodeStore = defineStore("episodeStore", {
	state: () => ({
		episode: {},
	}),
	actions: {
		async fetchEpisode(id) {
			try {
				const data = await axios.get(url + id);
				this.episode = data.data;
				// console.log(data.data);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
});
