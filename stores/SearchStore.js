import { defineStore } from "pinia";
import axios from "axios";

const url = "https://rickandmortyapi.com/api/character/?name=";

export const useSearchStore = defineStore("searchStore", {
	state: () => ({
		loader: false,
		character: [],
	}),
	actions: {
		async getCharacters(search) {
			try {
				this.loader = true;
				const data = await axios.get(url + search);
				this.characters = data.data.results;
				// console.log(data.data.results);
				this.loader = false;
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
	persist: true,
});
