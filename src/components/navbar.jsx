import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-10 py-4 bg-white shadow-sm">

            {/* Logo */}
            <div className="text-2xl font-bold text-pink-500">
                Loveena <span className="text-pink-300">Cakes</span>
            </div>

            {/* Nav Links */}
            <ul className="flex gap-8 list-none">
                <li>
                    <Link to="/" className="text-gray-600 hover:text-pink-500 font-medium">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/menu" className="text-gray-600 hover:text-pink-500 font-medium">
                        Menu
                    </Link>
                </li>
                <li>
                    <Link to="/orderDetails" className="text-gray-600 hover:text-pink-500 font-medium">
                        Order
                    </Link>
                </li>
                <li>
                    <Link to="/aboutUs" className="text-gray-600 hover:text-pink-500 font-medium">
                        About Us
                    </Link>
                </li>
            </ul>

            {/* CTA Button - Changed from <button> to <Link> */}
            <Link
                to="/orderDetails"
                className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 cursor-pointer transition duration-200"
            >
                Order Now
            </Link>

        </nav>
    )
}

export default Navbar;