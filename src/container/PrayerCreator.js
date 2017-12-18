import React, { Component } from "react";
import AddButton from "component/prayer/AddButton.js";
import AddForm from "component/prayer/AddForm.js";
import { add as addPrayer } from "module/prayer.js";

class PrayerCreator extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    onAddFormSubmit(prayerType) {
        return new Promise((resolve, reject) => {
            addPrayer(prayerType);
            this.setState({ isOpen: false });
            resolve();
        });
    }

    render() {
        return (
            <div>
                <AddButton
                    onClick={() => {
                        this.setState({ isOpen: true });
                    }}
                />
                <AddForm
                    isOpen={this.state.isOpen}
                    onSubmit={prayerType => {
                        return this.onAddFormSubmit(prayerType);
                    }}
                    onCancel={() => {
                        this.setState({ isOpen: false });
                    }}
                />
            </div>
        );
    }
}

export default PrayerCreator;
