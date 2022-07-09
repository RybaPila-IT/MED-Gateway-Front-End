import GrayBlocks from "../../assets/GrayBlocks.jpg";
import RobotEye from "../../assets/RobotEye.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home() {
    return (
        <div className="container">
            <div className="centered-container">
                <Carousel className="with-shadow full-container">
                    <Carousel.Item>
                        <img className="carousel-img" src={RobotEye} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                            <img className="carousel-img" src={GrayBlocks} alt="Second slide"/>
                    </Carousel.Item>
                    {/*<Carousel.Item>*/}
                    {/*    <img className="carousel-img" src={RobotEye} alt="Third slide"/>*/}
                    {/*</Carousel.Item>*/}
                </Carousel>
            </div>
            {/*<div className="full-container top-margin-container">*/}
            {/*    <div className="full-container" style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>*/}
            {/*        Hello*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*<div style={{marginBottom: '300px', width: '100px', height: '100px', borderRadius: '3px', borderColor: 'green'}}*/}
            {/*     className="with-shadow">*/}

            {/*</div>*/}

            {/*    <div style={{width: '30%'}}>*/}
            {/*        <h1>MED-Gateway system</h1>*/}
            {/*        <p>*/}
            {/*            As you might have already guessed this page is under construction.*/}
            {/*            Feel free to move around and use the system. The CSS styling and*/}
            {/*            visual design will be the last stage of the system implementation.*/}
            {/*        </p>*/}
            {/*        <FaHammer style={*/}
            {/*            {*/}
            {/*                fontSize: '20rem',*/}
            {/*                paddingTop: '10%',*/}
            {/*                paddingBottom: '10%'*/}
            {/*            }}/>*/}
            {/*        <h4 style={{paddingTop: '10%'}}>*/}
            {/*            Author: Radosław Radziukiewicz*/}
            {/*        </h4>*/}
            {/*    </div>*/}
        </div>

    )
}

export default Home;