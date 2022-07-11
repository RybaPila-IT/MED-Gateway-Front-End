import GrayBlocks from "../../assets/GrayBlocks.jpg";
import RobotEye from "../../assets/RobotEye.jpg";
import WomanWithUSG from "../../assets/WomanWithUSG.jpg";
import DoctorAndBaby from "../../assets/DoctorAndBaby.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home() {
    return (
        <>
            <div className="main-container">
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
                </div>
            </div>
            <div className="full-container top-margin-container">
                <div className="full-container transparent-black-bg">
                    <div className="main-container">
                        <div className="row">
                            <div className="col-6">
                                <div className="full-container centered">
                                    <img className="half-container" src={WomanWithUSG} alt="Woman holding USG"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="text-centered white-text">
                                    <h1>Heading</h1>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                        odit aut fugit, sed quia consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-container top-margin-container">
                <div className="full-container transparent-white-bg">
                    <div className="main-container">
                        <div className="row">
                            <div className="col-6">
                                <div className="text-centered black-text">
                                    <h1>Heading</h1>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam,
                                        eaque ipsa quae ab illo inventore veritatis et quasi
                                        architecto beatae vitae dicta sunt explicabo.
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                        odit aut fugit, sed quia consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                    </p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="full-container centered">
                                    <img className="half-container" src={DoctorAndBaby} alt="Doctor holding a baby"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        </>
    )
}

export default Home;