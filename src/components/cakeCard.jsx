// Add this import at the top
import { useNavigate } from 'react-router-dom';

function CakeCard({ name, category, description, price, image }) {
    const navigate = useNavigate();

    // Convert cake name to slug format matching OrderPage values
    // e.g., "Velvet Dream" -> "VelvetDream"
    const cakeSlug = name.replace(/\s+/g, '');

    const handleOrderClick = () => {
        navigate(`/orderDetails?cake=${cakeSlug}`);
    };

    return (
        <div className="bg-white border border-[#e8ddd4] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            {/* Image */}
            <div>
                <img
                    src={image}
                    alt={name}
                    className="w-full h-[200px] object-cover"
                />
            </div>

            {/* Card Body */}
            <div className="p-4">
                {/* Category pill */}
                <span className="inline-block bg-[#faece7] text-[#712B13] text-[13px] font-medium px-3 py-1 rounded-full mb-2">
                    {category}
                </span>

                {/* Name */}
                <h3 className="text-base font-semibold text-[#ed06a8] mb-1">
                    {name}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#712B13] leading-relaxed mb-3">
                    {description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <span className="text-[17px] font-semibold text-[#712B13]">
                        Rs.{price}
                    </span>
                    {/* Updated Button with navigation */}
                    <button
                        onClick={handleOrderClick}
                        className="bg-[#EC4899] text-[#712B13] border-none px-4 py-2 rounded-full text-[13px] font-medium cursor-pointer hover:bg-[#D81B60]"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CakeCard;