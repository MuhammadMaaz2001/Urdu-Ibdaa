<!-- Particles.svelte -->
<script>
  // Importing Svelte lifecycle functions
  import { onMount, onDestroy } from 'svelte';
  let countParticles = 0; // Initialize particles count

  onMount(() => {
    // Load particles.js script
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    particlesScript.async = true;
    particlesScript.onload = () => {
      // Initialize particles.js
      // @ts-ignore
      particlesJS("particles-js", {
        "particles": {
          // Particle configuration
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "polygon",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          // Interactivity configuration
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true // Retina display support
      });
    };
    document.head.appendChild(particlesScript);

    // Load stats.js script
    const statsScript = document.createElement('script');
    statsScript.src = 'http://threejs.org/examples/js/libs/stats.min.js';
    statsScript.async = true;
    document.head.appendChild(statsScript);

    // Update particles count
    const updateParticlesCount = () => {
      // @ts-ignore
      if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        // @ts-ignore
        countParticles = window.pJSDom[0].pJS.particles.array.length;
      }
    };

    // Update particles count periodically
    const updateInterval = setInterval(updateParticlesCount, 1000);

    // Stop updating particles count when component is destroyed
    onDestroy(() => {
      clearInterval(updateInterval);
    });
  });
</script>

<style>
  /* CSS for particles container */
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

<div id="particles-js"></div>
