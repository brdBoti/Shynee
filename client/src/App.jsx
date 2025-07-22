import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home      from './pages/Home';
import Rendelés  from './pages/Rendeles/Rendelés';
import Rolunk    from './pages/Rólunk';
import Kapcsolat from './pages/Kapcsolat';
import Layout    from './components/Layout';
import 'normalize.css';
import RendelésKülső from './pages/Rendeles/RendelésKülső';
import RendelésBelső from './pages/Rendeles/RendelésBelső';
import RendelésKülsőBelső from './pages/Rendeles/RendelésKülsőBelső';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index       element={<Home />} />
          <Route path="rendeles"  element={<Rendelés />} />
          <Route path="rolunk"    element={<Rolunk />} />
          <Route path="kapcsolat" element={<Kapcsolat />} />
          <Route path="rendeles-kulso" element={<RendelésKülső />} />
          <Route path="rendeles-belso" element={<RendelésBelső />} />
          <Route path="rendeles-kulso-belso" element={<RendelésKülsőBelső />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
