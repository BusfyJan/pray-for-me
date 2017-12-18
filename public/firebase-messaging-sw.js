importScripts("https://www.gstatic.com/firebasejs/4.6.2/firebase.js");

firebase.initializeApp({
    apiKey: "AIzaSyAxLUFulfX7PhX1NuaVQtiKcVgZsEH8TDc",
    authDomain: "pray-for-me-123.firebaseapp.com",
    databaseURL: "https://pray-for-me-123.firebaseio.com",
    projectId: "pray-for-me-123",
    storageBucket: "",
    messagingSenderId: "377445716599"
});

firebase.messaging().setBackgroundMessageHandler(function(payload) {
    return self.registration.showNotification("Hello world", {
        body: payload.data.status,
        requireInteraction: true
    });
});

self.addEventListener("notificationclick", function(event) {
    let url = "https://pray-for-me-123.firebaseapp.com";
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({ type: "window" }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && "focus" in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});
