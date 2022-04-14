import {FaHammer} from 'react-icons/fa'

function Home() {
    return (
        <div className="centered-container">
            <div style={{width: '30%'}}>
                <h1>MED-Gateway system</h1>
                <p>
                    As you might have already guessed this page is under construction.
                    Feel free to move around and use the system. The CSS styling and
                    visual design will be the last stage of the system implementation.
                </p>
                <FaHammer style={
                    {
                        fontSize: '20rem',
                        paddingTop: '10%',
                        paddingBottom: '10%'
                    }}/>
                <h4 style={{paddingTop: '10%'}}>
                    Author: Radosław Radziukiewicz
                </h4>
            </div>
        </div>

    )
}

export default Home;