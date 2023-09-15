import { defineStore } from "pinia";
import axios from "axios";

const url = "https://rickandmortyapi.com/api/character/";

export const useIdStore = defineStore("idStore", {
	state: () => ({
		character: {},
	}),
	actions: {
		async fetchCharacter(id) {
			try {
				const data = await axios.get(url + id);
				this.character = data.data;
				// console.log(data.data);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
});
