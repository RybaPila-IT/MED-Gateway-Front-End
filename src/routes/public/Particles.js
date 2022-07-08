import TSParticles from "react-tsparticles";
import {loadFull} from "tsparticles";

function Particles() {

    const particlesInit = async (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const options = {
        background: {
            color: {
                value: "#efefee",
            },
        },
        fpsLimit: 60,
        particles: {
            color: {
                value: "#6a6a6a",
            },
            links: {
                color: "#6a6a6a",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {min: 1, max: 3},
            },
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        detectRetina: true,
    }


    return (
        <TSParticles
            init={particlesInit}
            options={options}
        />
    )

}

export default Particles;