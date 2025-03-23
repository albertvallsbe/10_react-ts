import Button from "./components/ButtonTs";
import CounterTs from "./components/CounterTs";
import "./App.css";

const greet = (name: string): string => {
	return ` Hello ${name}`;
};

function App() {
	const handleClick = () => alert("Clicked!");
	console.log(greet("Titu"));

	return (
		<>
			<Button onclick={handleClick} label={"Click me!"} />
			<CounterTs />
		</>
	);
}

export default App;
