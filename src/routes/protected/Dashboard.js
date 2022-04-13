import fetus from '../../fetus.png';

const Dashboard = () => {
    return (
        <div className="centered-container">
            <div className="product-card">
                <img className="product-img" src={fetus} alt="Fetus" />
                <div className="product-title">
                    Fetal-Net
                </div>
                <div className="product-description">
                    This is the Fetal-Net short description
                </div>
            </div>
        </div>
    )
}

export default Dashboard;