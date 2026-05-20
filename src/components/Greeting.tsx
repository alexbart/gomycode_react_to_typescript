

// ==========================================
// Step 1:
// Create interface for component props
// ==========================================

// Define props structure
interface GreetingProps {

    // name must be a string
    name: string;
}

// ==========================================
// Step 2:
// Add prop types to component
// ==========================================

// Functional component with typed props
const Greeting = ({ name }: GreetingProps) => {

    return (

        // Display greeting message
        <div>
            Hello, {name}!
        </div>
    );
};

// Export component
export default Greeting;



// =======Changes made==================================
// | JavaScript         | TypeScript                  |
// | ------------------ | --------------------------- |
// | No prop validation | Interface added             |
// | Dynamic types      | Strong typing               |
// | `({ name })`       | `({ name }: GreetingProps)` |
