import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">

            {/* Hero Content */}
            <div className="text-center px-6">
                <p className="text-white text-sm font-medium tracking-widest uppercase mb-3">
                    Handcrafted with love
                </p>
                <h1 className="text-9xl text-black"
                    style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Loveena
                </h1>
                <h2 className="text-6xl font-black text-black tracking-widest -mt-4">
                    Cakes
                </h2>
                <p className="text-white text-xl mb-8 drop-shadow-md">
                    Custom cakes for every special occasion
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => navigate('/menu')}
                        className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-600">
                        Browse Menu
                    </button>
                    <button
                        onClick={() => navigate('/orderDetails')}
                        className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-50">
                        Custom Order
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home;