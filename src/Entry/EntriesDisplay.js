import React, { Component } from "react";
import EntryComponent from "./EntryComponent";

export default class EntriesDisplay extends Component {
	state = {
		entries: [],
	};

	componentDidMount() {
		fetch("http://localhost:3000/entries")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					entries: json,
				});
			});
	}

	// addEntry = (event) => {
	// 	if (!this.state.entries.includes(event)) {
	// 		this.setState({ entries: [...this.state.entries, event] });
	// 	}
	// };

	addEntry = (event) => {
		event.preventDefault();
		console.log(event.target.mood.value);

		let data = {
			date: event.target.date.value,
			title: event.target.title.value,
			context: event.target.context.value,
			intensity_level: event.target.intensitylevel.value,
			mood_id: 1,
			user_id: 1,
		};

		fetch("https://localhost:3000/entries", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((response) => response.json());

		// this.addEntry(event);
	};

	render() {
		return (
			<div>
				<EntryComponent entries={this.state.entries} addEntry={this.addEntry} />
			</div>
		);
	}
}
