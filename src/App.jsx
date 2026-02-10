import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock, Home } from "#components";
import { Contact, Finder, ImageWindow, Resume, Safari, Terminal, Text, Photos } from "#windows";
import { useEffect } from "react";

gsap.registerPlugin(Draggable);

const App = () => {
  useEffect(() => {
    const wallpapers = [
      "wallpaper-1.jpg",
      "wallpaper-2.jpg",
      "wallpaper-3.jpg",
      "wallpaper-4.jpg",
      "wallpaper-5.jpg"
    ];
    const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    document.body.style.backgroundImage = `url("/images/${randomWallpaper}")`;
  }, []);

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <ImageWindow />
      <Contact />
      <Photos />

      <Home />
    </main>
  );
};

export default App;
