import { defineStore } from "pinia";
import axios from "axios";

const url = "https://rickandmortyapi.com/api/character/";

export const useCharacterStore = defineStore("characterStore", {
	state: () => ({
		characters: [],
		// character: {},
	}),
	actions: {
		async fetchCharacters() {
			try {
				const data = await axios.get(url);
				this.characters = data.data.results;
				// console.log(data.data.results);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
});
