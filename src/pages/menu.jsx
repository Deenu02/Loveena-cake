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
    { id: 1, name: "Velvet Dream", category: "Birthday", description: "Sweet, soft, and party-perfect.", price: 5800, image: birthday },
    { id: 2, name: "Pearl Elegance", category: "Wedding", description: "Pure elegance in every bite.", price: 15500, image: wedding },
    { id: 3, name: "Choco Love", category: "Anniversary", description: "Rich chocolate & sweet move.", price: 12800, image: anniversary },
    { id: 4, name: "Little Surprise", category: "Gender Reveal", description: "A sweet secret inside.", price: 9900, image: gender },
    { id: 5, name: "Smart Treat", category: "Graduation", description: "Celebrate success deliciously.", price: 4800, image: graduation },
    { id: 6, name: "Forever Sweet", category: "Engagement", description: "Made for love stories.", price: 10200, image: engagement },
    { id: 7, name: "Tiny Joy", category: "Baby Shower", description: "Soft, sweet, and adorable.", price: 6700, image: babyshower },
    { id: 8, name: "Sugar Swirls", category: "Cup Cake", description: "Mini bites of happiness.", price: 150, image: cupcake },
    { id: 9, name: "Velvet Cocoa", category: "Eggless", description: "Rich taste, no eggs needed.", price: 3800, image: eggless },
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