import { defineStore } from "pinia";
import axios from "axios";

const url1 = "https://rickandmortyapi.com/api/character/?name=";
const url2 = "https://rickandmortyapi.com/api/character/?page=";

export const useSearchStore = defineStore("searchStore", {
	state: () => ({
		loader: false,
		character: [],
	}),
	actions: {
		async getCharacters(search) {
			try {
				this.loader = true;
				let data = await axios.get(url1 + search);
				let arr = [];
				const count = data.data.info.pages;
				// console.log(data.data.info);
				if (count > 1) {
					for (let i = 1; i <= count; i++) {
						data = await axios.get(url2 + i + "&name=" + search);
						for (let j = 0; j < data.data.results.length; j++) {
							arr.push(data.data.results[j]);
						}
					}
					// console.log(arr);
					this.characters = arr;
				} else {
					this.characters = data.data.results;
				}
				this.loader = false;
			} catch (error) {
				alert(error);
				console.log(error);
			}
		},
	},
	persist: true,
});
