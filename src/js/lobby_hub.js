import { CookieUtils } from "./cookieUtils.js";
import { GetLobbyName } from "./utils.js";

export const LobbyHub = {
    connection: null, // Placeholder for the connection object

    init: async function () {
        // Initialize the SignalR connection and start it
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("http://127.0.0.1:32000/lobbyhub")
            .build();

        await this.connection.start();
        this.registerHandlers();
        console.log("Connected to LobbyHub");
    },

    joinLobby: function (lobbyName, playerId) {
        if (!this.connection) {
            console.error("SignalR connection is not initialized.");
            return;
        }

        console.log(`Joining lobby: ${lobbyName} with playerId: ${playerId}`);
        this.connection.invoke("JoinLobby", lobbyName, playerId).catch((err) => {
            console.error("Failed to join lobby:", err);
        });
    },

    registerHandlers: function () {
        if (!this.connection) {
            console.error("SignalR connection is not initialized.");
            return;
        }

        this.connection.on("JoinedToLobby", (message) => {
            console.log('Joined lobby', message);
            setLobbyToLocalStorage(message.name, message.userId);
        });

        this.connection.on("StartGame", (lobbyState) => {
            console.log("Lobby updated:", lobbyState);
        });

        this.connection.on("UpdateLobby", (lobbyState) => {
            console.log("Lobby updated:", lobbyState);
        });
    },

}

function setLobbyToLocalStorage(lobby, userId){

    let isLobbyInStorage = sessionStorage.getItem(lobby)
    if (isLobbyInStorage != null){
        sessionStorage.removeItem(sessionStr)
    }

    sessionStorage.setItem(lobby, userId);
    console.log(sessionStr);
}