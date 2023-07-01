import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const optionsvar = 
    {
        "fullScreen": {
            "zIndex": -1
        },
        "interactivity": {
            "detectsOn": "window",
            "events": {
                "onClick": {
                    "enable": true,
                    "mode": "push"
                },
                "onDiv": {
                    "elementId": "repulse-div",
                    "enable": false,
                    "mode": "repulse"
                },
                "onHover": {
                    "enable": true,
                    "mode": "repulse",
                    "parallax": {
                        "enable": false,
                        "force": 60,
                        "smooth": 10
                    }
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "opacity": 0.8,
                    "size": 40
                },
                "connect": {
                    "distance": 80,
                    "lineLinked": {
                        "opacity": 0.5
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "lineLinked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "slow": {
                    "active": false,
                    "factor": 1,
                    "radius": 0
                }
            }
        },
        "particles": {
            "color": {
                value: ["#12c2e9", "#c471ed", "#f64f59"],
                            animation: {
                    enable: true,
                    speed: 40,
                    sync: false
                }
            },
            "links": {
                "blink": false,
                "color": {
                    "value": "random"
                },
                "consent": false,
                "distance": 150,
                "enable": true,
                "opacity": 0.4,
                "shadow": {
                    "blur": 5,
                    "color": "lime",
                    "enable": false
                },
                "width": 1
            },
            "move": {
                "attract": {
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "collisions": false,
                "direction": "none",
                "enable": true,
                "outMode": "out",
                "random": false,
                "speed": 2,
                "straight": false,
                "trail": {
                    "enable": false,
                    "length": 10,
                    "fillColor": "#000000"
                }
            },
            "number": {
                "density": {
                    "enable": true
                },
                "limit": 0,
                "value": 80
            },
            "opacity": {
                "animation": {
                    "enable": true,
                    "minimumValue": 0.1,
                    "speed": 1,
                    "sync": false
                },
                "random": false,
                "value": 0.5
            },
            "rotate": {
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "random": false,
                "value": 0
            },
            "size": {
                "animation": {
                    "enable": false,
                    "minimumValue": 10,
                    "speed": 10,
                    "sync": false
                },
                "random": false,
                "value": 1
            }
        },
        "polygon": {
            "draw": {
                "enable": false,
                "stroke": {
                    "color": "#ffffff",
                    "width": 0.5
                }
            },
            "enable": false,
            "inline": {
                "arrangement": "one-per-point"
            },
            "move": {
                "radius": 10,
                "type": "path"
            },
            "scale": 1,
            "type": "none",
            "url": ""
        },
        "backgroundMask": {
            "enable": false
        },
        "pauseOnBlur": true,
        "background": {
            "color": "#fff",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            height="50px"
            options={
                optionsvar
            }
        />
    );
}
export default Particle;