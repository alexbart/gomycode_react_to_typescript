

// ==========================================
// Props Interface
// ==========================================

interface GreetingProps {

    // User name
    name: string;
}

// ==========================================
// Greeting Component
// ==========================================

const Greeting = ({ name }: GreetingProps) => {

    return (

        // Card container
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white text-center">

            {/* Heading */}
            <h1 className="text-3xl font-bold mb-2">
                Welcome 👋
            </h1>

            {/* Greeting message */}
            <p className="text-lg">
                Hello, {name}!
            </p>

        </div>
    );
};

export default Greeting;



// =======Changes made==================================
// | JavaScript         | TypeScript                  |
// | ------------------ | --------------------------- |
// | No prop validation | Interface added             |
// | Dynamic types      | Strong typing               |
// | `({ name })`       | `({ name }: GreetingProps)` |
