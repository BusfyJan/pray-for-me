import React, { Component } from "react";
import AddButton from "component/prayer/AddButton.js";
import AddForm from "component/prayer/AddForm.js";

class PrayerCreator extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
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
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                this.setState({ isOpen: false });
                                resolve();
                            }, 1000);
                        });
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
