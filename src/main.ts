import { camera, renderer, scene } from "./boilerplate/init";
import setupEvents from "./boilerplate/events";

function mainLoop() {
	requestAnimationFrame(mainLoop);

	renderer.render(scene, camera);
}

mainLoop();

setupEvents(camera, renderer);