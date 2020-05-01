import React from "react";

import Input from "./Input";
import Weights from "./Weights";

class App extends React.Component {
    // The purpose of the App file is to store a collection of entries
    // for the Weights file to render
    state = { entries: [] };
    
    onEntrySubmit = entry => {
        let doesDateHaveEntry = 0;
        for (let i = 0; i < this.state.entries.length; i++) {
            if (entry.date === this.state.entries[i].date) {
                doesDateHaveEntry++;
            }
        }

        if (doesDateHaveEntry) {
            this.setState(prevState => {
                return {
                    entries: prevState.entries.map(
                        el => el.date === entry.date ? { ...el, weight: entry.weight } : el
                )}
            })
        } else {
            this.setState(prevState => {
                return {
                    entries: [...prevState.entries, entry]
                };
            });
        }
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <h1>Weight Tracker</h1>
                <Input onSubmit={this.onEntrySubmit} />
                <Weights entries={this.state.entries} />
            </div>
        );
    }
}

export default App;