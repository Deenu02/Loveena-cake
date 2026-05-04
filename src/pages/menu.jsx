import CakeCard from '../components/cakeCard';
import './menu.css';
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
    {
        id: 1,
        name: "Velvet Dream",
        category: "Birthday",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: birthday
    },
    {
        id: 2,
        name: "Pearl Elegance",
        category: "Wedding",
        description: "Vanilla sponge with white fondant and pearls",
        price: 120,
        image: wedding
    },
    {
        id: 3,
        name: "Velvet Dream",
        category: "Anniversary",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: anniversary
    },
    {
        id: 4,
        name: "Velvet Dream",
        category: "Gender Reveal",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: gender
    },
    {
        id: 5,
        name: "Velvet Dream",
        category: "Graduation",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: graduation
    },
    {
        id: 6,
        name: "Velvet Dream",
        category: "Engagement",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: engagement
    },
    {
        id: 7,
        name: "Velvet Dream",
        category: "Baby shower",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: babyshower
    },
    {
        id: 8,
        name: "Velvet Dream",
        category: "Baby shower",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: cupcake
    },
    {
        id: 9,
        name: "Velvet Dream",
        category: "Eggless",
        description: "Red velvet layers with cream cheese frosting",
        price: 48,
        image: eggless
    },
];

function Menu() {
    return (
        <div className="menu-page">
            <h2 className="menu-title">Our Cakes</h2>
            <div className="menu-grid">
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