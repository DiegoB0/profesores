import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AppContextProvider } from './context/AppContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProfesoresAgregar from './pages/ProfesoresAgregar';
import ProfesoresPage from './pages/ProfesoresPage';

function App() {
	return (
		<AppContextProvider>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/profesores" element={<ProfesoresPage />}></Route>
				<Route path="/profesores/new" element={<ProfesoresAgregar />}></Route>
				<Route
					path="/profesores/edit/:id"
					element={<ProfesoresAgregar />}
				></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</AppContextProvider>
	);
}

export default App;
