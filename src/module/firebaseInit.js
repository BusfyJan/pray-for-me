import firebase from "firebase";

firebase.initializeApp(
    process.env.REACT_APP_NODE_ENV === 'development'
        ? {
            apiKey: "AIzaSyDmt-i31VhqsNoh1KccAiuTpuwDbnD7chQ",
            authDomain: "pray-for-me-dev.firebaseapp.com",
            databaseURL: "https://pray-for-me-dev.firebaseio.com",
            projectId: "pray-for-me-dev",
            storageBucket: "pray-for-me-dev.appspot.com",
            messagingSenderId: "486945506229"
        }
        : {
            apiKey: "AIzaSyAxLUFulfX7PhX1NuaVQtiKcVgZsEH8TDc",
            authDomain: "pray-for-me-123.firebaseapp.com",
            databaseURL: "https://pray-for-me-123.firebaseio.com",
            projectId: "pray-for-me-123",
            storageBucket: "",
            messagingSenderId: "377445716599"
    }
);