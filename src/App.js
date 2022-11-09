import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Beranda from './pages/Beranda';
import Layanan from './pages/Layanan';
import Lokasi from './pages/Lokasi';
import Tentang from './pages/Tentang';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Beranda />} />
				<Route path="/layanan" element={<Layanan />} />
				<Route path="/lokasi" element={<Lokasi />} />
				<Route path="/tentang" element={<Tentang />} />
			</Routes>
		</>
	);
};

export default App;
