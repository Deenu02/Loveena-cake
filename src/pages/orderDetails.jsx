import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderPage = () => {
    // This hook grabs the cake name passed from the Menu page URL (e.g., ?cake=VelvetDream)
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        cakeType: 'VelvetDream', // Default
        deliveryDate: '',
        message: ''
    });

    // Check URL parameters when page loads to pre-select the cake
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const selectedCake = params.get('cake');
        if (selectedCake) {
            setFormData(prev => ({ ...prev, cakeType: selectedCake }));
        }
    }, [location.search]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would usually send this data to a backend API
        alert(`Thank you ${formData.name}! Your order for the ${formData.cakeType} has been received.`);
    };

    return (
        <div className="min-h-screen bg-[#f3e5f5] font-sans text-gray-800">

            {/* Main Content */}
            <div className="max-w-4xl mx-auto py-10 px-4">
                <h1 className="text-4xl text-center mb-8 font-light text-gray-800">Place Your Order</h1>

                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">

                    {/* Personal Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500 bg-pink-50"
                                placeholder="Deenu Hansama"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500 bg-pink-50"
                                placeholder="+94 77 123 4567"
                            />
                        </div>
                    </div>

                    {/* Cake Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Select Your Cake</label>
                        <select
                            name="cakeType"
                            value={formData.cakeType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500 bg-pink-50 cursor-pointer"
                        >
                            <option value="VelvetDream">Velvet Dream (Birthday)</option>
                            <option value="PearlElegance">Pearl Elegance (Wedding)</option>
                            <option value="ChocoLove">Choco Love (Anniversary)</option>
                            <option value="LittleSurprise">Little Surprise (Gender Reveal)</option>
                            <option value="SmartTreat">Smart Treat (Graduation)</option>
                            <option value="ForeverSweet">Forever Sweet (Engagement)</option>
                            <option value="TinyJoy">Tiny Joy (Baby Shower)</option>
                            <option value="SugarSwirls">Sugar Swirls (Cup Cake)</option>
                            <option value="VelvetCocoa">Velvet Cocoa (Eggless)</option>
                        </select>
                    </div>

                    {/* Delivery Details */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-2">Delivery Address</label>
                        <input
                            type="text"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500 bg-pink-50"
                            placeholder="No. 12, Flower Road, Colombo"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Delivery Date</label>
                            <input
                                type="date"
                                name="deliveryDate"
                                required
                                value={formData.deliveryDate}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500 bg-pink-50"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">Special Message (Optional)</label>
                            <input
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-500 bg-pink-50"
                                placeholder="Happy Birthday Mom!"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-10 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                        >
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderPage;