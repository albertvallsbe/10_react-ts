import { useReducer } from "react";

type State = { count: number };
type Action = { type: "increment" | "decrement" | "multiply" | "divide" };

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "multiply":
			return { count: state.count * 2 };
		case "divide":
			return { count: state.count / 2 };
		default:
			return state;
	}
};

const CounterAdvanced = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<div>
			<p>Contador: {state.count}</p>

			<button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
			<button onClick={() => dispatch({ type: "increment" })}>Increment</button>
			<button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
			<button onClick={() => dispatch({ type: "divide" })}>Divide</button>
		</div>
	);
};
export default CounterAdvanced;
