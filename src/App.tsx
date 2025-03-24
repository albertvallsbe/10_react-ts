import Button from "./components/ButtonTs";
import CounterTs from "./components/CounterTs";
import "./App.css";
import ContextApi from "./components/ContextApi/ContextApi";
import CounterAdvanced from "./components/CounterAdvanced/CounterAdvanced";

const greet = (name: string): string => {
	return `Hello ${name}`;
};

function App() {
	const handleClick = () => alert("Clicked!");
	console.log(greet("Titu"));

	return (
		<>
			<Button onclick={handleClick} label={"Click me!"} />
			<CounterTs />
			<ContextApi />
			<CounterAdvanced />
		</>
	);
}

export default App;
