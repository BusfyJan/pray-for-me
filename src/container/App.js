import React, { Component } from "react";
import Dashboard from "component/Dashboard.js";
import FullCircularLoader from "component/loader/FullCircularLoader.js";
import { init as initUser } from "module/user/user.js";

class App extends Component {
    constructor() {
        super();

        this.state = {
            isInitializingUser: true
        };
    }

    componentDidMount() {
        initUser()
            .then(() => {
                this.setState({ isInitializingUser: false });
            })
            .catch(error => {
                console.log("Failed to init user: " + error);
            });
    }

    render() {
        if (this.state.isInitializingUser) {
            return <FullCircularLoader />;
        }

        return <Dashboard />;
    }
}

export default App;
