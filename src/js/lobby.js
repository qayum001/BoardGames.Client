import { GetFromStorage, GetLobbyName, SetToStorage, uuidv4 } from "./utils.js";
import { invokeMethod } from "./WebSocketServise.js";

export const Lobby = {
    init: async function () {
        let lobbyName = GetLobbyName();
        let playerId = sessionStorage.getItem(lobbyName);

        console.log(lobbyName);
        if (playerId == undefined){
            let userId = uuidv4();
    
            if (lobbyName == '' || lobbyName == null){
                lobbyName = uuidv4().split('-')[1];
            }
    
            joinLobby(lobbyName, userId)
            return;
        }

        console.log('Try to join with existing params\n' +
             'LobbyName: ' + lobbyName +
            '\nPlayerId: ' + playerId)
        joinLobby(lobbyName, playerId)
    },

    connect: function () {
        console.log("Lobby connect method called.");
    },
}

function joinLobby(lobbyName, playerId){
    SetToStorage(lobbyName, playerId)
    invokeMethod("JoinLobby", lobbyName, playerId)
}