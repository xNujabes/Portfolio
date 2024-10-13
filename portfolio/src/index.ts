import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { get, writable } from "svelte/store";

export const path = writable<string>(window.location.pathname)

window.addEventListener("popstate", () => path.set(window.location.pathname));

export function setPath(pathString: string) {
    const splittedPath = (pathString[0] === "/" ? pathString : "/" + pathString)
    path.update(() => splittedPath);
    window.history.pushState({}, "", get(path));
}

(window as any).HELP_IMPROVE_VIDEOJS = false;


gsap.registerPlugin(TextPlugin);
gsap.registerPlugin()