import CakeCard from '../components/cakeCard';
import birthday from '../assets/birthday.jpg';
import wedding from '../assets/wedding.jpg';
import anniversary from '../assets/anniversary.jpg'
import gender from '../assets/gender.jpg'
import graduation from '../assets/graduation.jpg'
import engagement from '../assets/engagement.jpg'
import babyshower from '../assets/babyshower.jpg'
import cupcake from '../assets/cupcake.jpg'
import eggless from '../assets/eggless.jpg'

const cakes = [
    { id: 1, name: "Velvet Dream", category: "Birthday", description: "Red velvet layers with cream cheese frosting", price: 48, image: birthday },
    { id: 2, name: "Pearl Elegance", category: "Wedding", description: "Vanilla sponge with white fondant and pearls", price: 120, image: wedding },
    { id: 3, name: "Velvet Dream", category: "Anniversary", description: "Red velvet layers with cream cheese frosting", price: 48, image: anniversary },
    { id: 4, name: "Velvet Dream", category: "Gender Reveal", description: "Red velvet layers with cream cheese frosting", price: 48, image: gender },
    { id: 5, name: "Velvet Dream", category: "Graduation", description: "Red velvet layers with cream cheese frosting", price: 48, image: graduation },
    { id: 6, name: "Velvet Dream", category: "Engagement", description: "Red velvet layers with cream cheese frosting", price: 48, image: engagement },
    { id: 7, name: "Velvet Dream", category: "Baby Shower", description: "Red velvet layers with cream cheese frosting", price: 48, image: babyshower },
    { id: 8, name: "Velvet Dream", category: "Baby Shower", description: "Red velvet layers with cream cheese frosting", price: 48, image: cupcake },
    { id: 9, name: "Velvet Dream", category: "Eggless", description: "Red velvet layers with cream cheese frosting", price: 48, image: eggless },
];

function Menu() {
    return (
        <div className="p-8 bg-[#e7d5e0] min-h-screen">
            <h2 className="text-3xl text-[#2c1a0e] mb-6 text-center">Our Cakes</h2>
            <div className="grid grid-cols-3 gap-5 max-w-[900px] mx-auto">
                {cakes.map(cake => (
                    <CakeCard
                        key={cake.id}
                        name={cake.name}
                        category={cake.category}
                        description={cake.description}
                        price={cake.price}
                        image={cake.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Menu;