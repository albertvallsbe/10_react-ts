import { useState } from "react";

const CounterTs = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

export default CounterTs;
