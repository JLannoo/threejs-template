import { PerspectiveCamera, Renderer } from "three";

export function resize(camera: PerspectiveCamera, renderer: Renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

export default function setupEvents(camera: PerspectiveCamera, renderer: Renderer) {
    window.addEventListener("resize", () => resize(camera, renderer));
}