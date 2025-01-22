const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://127.0.0.1:32000/lobbyhub")
    .build();

const startConnection = async () => {
    if (connection.state === signalR.HubConnectionState.Disconnected) {
        await connection.start();
        console.log("SignalR connected");
    }
};

const invokeMethod = async (methodName, ...args) => {
    await startConnection();
    return connection.invoke(methodName, ...args);
};

connection.on("JoinedToLobby", (message) => {
    console.log('Joined lobby', message);
    setLobbyToLocalStorage(message.name, message.userId);
});

connection.on("UpdateLobby", (lobbyState) => {
    console.log("Lobby updated:", lobbyState);
});

export { connection, invokeMethod };