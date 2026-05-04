import CakeCard from '../components/cakeCard';
import './menu.css';
import birthday from '../assets/birthday.jpg';
import wedding from '../assets/wedding.jpg';

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
        description: "Vanilla sponge with white fondant and sugar pearls",
        price: 120,
        image: wedding
    }
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