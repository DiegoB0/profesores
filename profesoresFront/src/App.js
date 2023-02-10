import { Route, Routes } from 'react-router-dom';
import './App.css';
import BarraSuperior from './components/BarraSuperior';
import ProfesoresAgregar from './components/ProfesoresAgregar';
import ProfesoresModificar from './components/ProfesoresModificar';
import Home from './pages/Home';
import Profesores from './pages/Profesores';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<BarraSuperior />}>
					<Route index element={<Home></Home>}></Route>
					<Route path="profesores">
						<Route index element={<Profesores />} />
						<Route path="agregar" element={<ProfesoresAgregar />} />
						<Route
							path="modificar/:c"
							element={<ProfesoresModificar></ProfesoresModificar>}
						></Route>
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
