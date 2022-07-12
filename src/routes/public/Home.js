import GrayBlocks from "../../assets/GrayBlocks.jpg";
import RobotEye from "../../assets/RobotEye.jpg";
import WomanWithUSG from "../../assets/WomanWithUSG.jpg";
import DoctorAndBaby from "../../assets/DoctorAndBaby.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home() {
    return (
        <>
            <div className="main-padded">
                <div className="container">
                    <div className="centered-container">
                        <Carousel className="container--full-size carousel--shadow">
                            <Carousel.Item>
                                <img className="carousel__img" src={RobotEye} alt="First slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="carousel__img" src={GrayBlocks} alt="Second slide"/>
                            </Carousel.Item>
                            {/*<Carousel.Item>*/}
                            {/*    <img className="carousel-img" src={RobotEye} alt="Third slide"/>*/}
                            {/*</Carousel.Item>*/}
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="preview black--background">
                <div className="main-padded">
                    <div className="row">
                        <div className="col-6">
                            <img className="preview__img" src={WomanWithUSG} alt="Woman holding USG"/>
                        </div>
                        <div className="col-6">
                            <div className="preview__text preview--white-text">
                                <h1 className="preview__text__header">Heading</h1>
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
            <div className="preview white-background">
                <div className="main-padded">
                    <div className="row">
                        <div className="col-6">
                            <div className="preview__text preview--black-text">
                                <h1 className="preview__text__header">Heading</h1>
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
                            <img className="preview__img" src={DoctorAndBaby} alt="Doctor holding a baby"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;