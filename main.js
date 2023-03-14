console.log( "main.js loaded" );
import { tsParticles } from "tsparticles-engine";

tsParticles
  .loadJSON("tsparticles", "public/particles.json")
  .then(container => {
    console.log("callback - tsparticles config loaded");
  })
  .catch(error => {
    console.error(error);
  });
