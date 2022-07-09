import './App.css';

import Routing from "./routes/Routing";
import Particles from "./routes/public/Particles";

function App() {

    return (
        <div className="main-container">
            <Particles />
            <Routing/>
        </div>
    );
}

export default App;
