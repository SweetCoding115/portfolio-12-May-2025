import { useState } from 'react'
import AtroposCard from './components/atropos'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<AtroposCard />
			</div>
			<h1>Full Stack Web Developer</h1>
			<div className="card">
				{/* <button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button> */}
				<p>
					Experience and Education sections are also coming soon...
				</p>
			</div>
		</>
	)
}

export default App
