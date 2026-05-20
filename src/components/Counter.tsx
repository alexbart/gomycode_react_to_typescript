// Import React and Component
import React, { Component } from "react";

// ==========================================
// Step 1:
// Create interface for component state
// ==========================================

// Define state structure
interface CounterState {

    // count must be a number
    count: number;
}

// ==========================================
// Step 2:
// Add state typing to Component
// ==========================================

// No props are used,
// so first generic type is {}
class Counter extends Component<{}, CounterState> {

    // ==========================================
    // Step 3:
    // Initialize typed state
    // ==========================================

    state: CounterState = {

        // Initial counter value
        count: 0,
    };

    // ==========================================
    // Step 4:
    // Create increment method
    // ==========================================

    increment = (): void => {

        // Update state
        this.setState({

            count: this.state.count + 1,
        });
    };

    // ==========================================
    // Step 5:
    // Render UI
    // ==========================================

    render() {

        return (

            <div>

                {/* Display counter */}
                <p>
                    Count: {this.state.count}
                </p>

                {/* Increment button */}
                <button onClick={this.increment}>
                    Increment
                </button>

            </div>
        );
    }
}

// Export component
export default Counter;




// ================Changes==============================
// | JavaScript     | TypeScript                    |
// | -------------- | ----------------------------- |
// | Untyped state  | `CounterState` interface      |
// | `Component`    | `Component<{}, CounterState>` |
// | No return type | `(): void` added              |
// | Dynamic state  | Strict typing                 |
