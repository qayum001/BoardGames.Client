import { SetInteractiveElementsHandler } from "./InteractiveElementsSetter.js";
import { Lobby } from "./lobby.js";
import { LobbyHub } from "./lobby_hub.js";

SetInteractiveElementsHandler(LobbyHub);

(async () => {
    await Lobby.init();
})();