import Axios from "axios";
import { CHANGE,  GRAB, DELETE, EDIT, GRABE } from "./constants";

export function grab_data() {
	const data = Axios.get("/api/v0/sample");
	return {
		type: GRAB,
		payload: data
	};
}
export function change_main(obj) {
	const data = Axios.post("/api/v0/sample",obj);
	return {
		type: CHANGE,
		payload: data
	};
}
export function delete_data(_id) {
	const data = Axios.delete("/api/v0/sample/" + _id);
	return {
		type: DELETE,
		payload: data
	};
}

export function edit_data(contact) {
	const data = Axios.delete("/api/v0/sample/", contact);
	return {
		type: DELETE,
		payload: data
	};
}

export function grab_entry(obj) {
	console.log(obj);
	let data = {data: {response: [obj]}};
	return {
		type: GRABE,
		payload: data
	};
}
