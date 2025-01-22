import { GetFromStorage, GetLobbyName } from "./utils.js";
import { invokeMethod } from "./WebSocketServise.js";

export function SetInteractiveElementsHandler(){
    setSeatButtons();
}

function setSeatButtons(){

    for (let i = 0; i < 10; i++) {
        let button = document.getElementById('s' + i);
        button.onclick = function() {
            let lobby = GetLobbyName();

            let userClientId = GetFromStorage(lobby);
            console.log(lobby, userClientId, button.getAttribute('id')[1])
            invokeMethod("BecomePlayer", lobby, userClientId, button.getAttribute('id')[1])
        };
    }
}