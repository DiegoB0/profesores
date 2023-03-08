import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AlumnosContextProvider } from './context/AlumnosContext';
import { AsesoriasContextProvider } from './context/AsesoriasContext';
import { ProfesoresContextProvider } from './context/ProfesoresContext';
import { TutoriasGrupalesContextProvider } from './context/TutoriasGrupalesContext';
import { TutoriasIndividualesContextProvider } from './context/TutoriasIndividualesContext';
import { UsersContextProvider } from './context/UsersContext';
import AsesoriasAgregar from './pages/asesorias/AsesoriasAgregar';
import AsesoriasPage from './pages/asesorias/AsesoriasPage';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProfesoresAgregar from './pages/profesores/ProfesoresAgregar';
import ProfesoresPage from './pages/profesores/ProfesoresPage';
import TutoriasCards from './pages/TutoriasCards';
import TutoGrupalesAgregar from './pages/tutoriasGrupales/TutoGrupalesAgregar';
import TutoGrupalesPage from './pages/tutoriasGrupales/TutoGrupalesPage';
import TutoIndividualesAgregar from './pages/tutoriasIndividuales/TutoIndividualesAgregar';
import TutoIndividualesPage from './pages/tutoriasIndividuales/TutoIndividualesPage';

function App() {
	return (
		<UsersContextProvider>
			<ProfesoresContextProvider>
				<AlumnosContextProvider>
					<TutoriasGrupalesContextProvider>
						<TutoriasIndividualesContextProvider>
							<AsesoriasContextProvider>
								<Navbar></Navbar>
								<Routes>
									<Route path="/" element={<Login />}></Route>
									<Route element={<ProtectedRoute />}>
										<Route path="/home" element={<Home></Home>}></Route>
										<Route
											path="/profesores"
											element={<ProfesoresPage />}
										></Route>
										<Route
											path="/asesorias"
											element={<AsesoriasPage />}
										></Route>
										<Route path="/tutorias" element={<TutoriasCards />}></Route>
										<Route
											path="/tutorias/grupales"
											element={<TutoGrupalesPage />}
										></Route>
										<Route
											path="/tutorias/individuales"
											element={<TutoIndividualesPage />}
										></Route>
										<Route
											path="/profesores/new"
											element={<ProfesoresAgregar />}
										></Route>
										<Route
											path="/asesorias/new"
											element={<AsesoriasAgregar />}
										></Route>
										<Route
											path="/tutorias/grupales/new"
											element={<TutoGrupalesAgregar />}
										></Route>
										<Route
											path="/tutorias/individuales/new"
											element={<TutoIndividualesAgregar />}
										></Route>
										<Route
											path="/profesores/edit/:id"
											element={<ProfesoresAgregar />}
										></Route>
										<Route
											path="/asesorias/edit/:id"
											element={<AsesoriasAgregar />}
										></Route>
										<Route
											path="/tutorias/grupales/edit/:id"
											element={<TutoGrupalesAgregar />}
										></Route>
										<Route
											path="/tutorias/individuales/edit/:id"
											element={<TutoIndividualesAgregar />}
										></Route>
									</Route>
									<Route path="*" element={<NotFound />}></Route>
								</Routes>
							</AsesoriasContextProvider>
						</TutoriasIndividualesContextProvider>
					</TutoriasGrupalesContextProvider>
				</AlumnosContextProvider>
			</ProfesoresContextProvider>
		</UsersContextProvider>
	);
}

export default App;
