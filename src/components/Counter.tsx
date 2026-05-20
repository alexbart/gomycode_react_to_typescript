// Import React
import React, { Component } from "react";

// ==========================================
// State Interface
// ==========================================

interface CounterState {

    // Counter value
    count: number;
}

// ==========================================
// Counter Component
// ==========================================

class Counter extends Component<{}, CounterState> {

    // Initial state
    state: CounterState = {

        count: 0,
    };

    // Increment method
    increment = (): void => {

        this.setState({

            count: this.state.count + 1,
        });
    };

    render() {

        return (

            // Card container
            <div className="bg-red-900 text-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md mx-auto mt-10">

                {/* Title */}
                <h2 className="text-3xl font-bold mb-6">
                    Counter App
                </h2>

                {/* Count display */}
                <p className="text-5xl font-extrabold text-blue-400 mb-6">
                    {this.state.count}
                </p>

                {/* Increment button */}
                <button
                    onClick={this.increment}
                    className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
                >
                    Increment
                </button>

            </div>
        );
    }
}

export default Counter;




// ================Changes==============================
// | JavaScript     | TypeScript                    |
// | -------------- | ----------------------------- |
// | Untyped state  | `CounterState` interface      |
// | `Component`    | `Component<{}, CounterState>` |
// | No return type | `(): void` added              |
// | Dynamic state  | Strict typing                 |
