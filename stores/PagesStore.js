import { defineStore } from "pinia";
import axios from "axios";

const url = "https://rickandmortyapi.com/api/character/?page=";

export const usePagesStore = defineStore("pagesStore", {
	state: () => ({
		characters: {},
	}),
	actions: {
		async fetchCharacters(id) {
			try {
				const data = await axios.get(url + id);
				this.characters = data.data.results;
				// console.log(data.data.results);
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
