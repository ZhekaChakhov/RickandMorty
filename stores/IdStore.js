import { defineStore } from "pinia";
import axios from "axios";

const url = "https://rickandmortyapi.com/api/character/";

export const useIdStore = defineStore("idStore", {
	state: () => ({
		character: {},
		location: {},
	}),
	actions: {
		async fetchCharacter(id) {
			try {
				const data = await axios.get(url + id);
				this.character = data.data;
				this.location = data.data.location;
				// console.log(data.data);
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
});
