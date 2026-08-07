import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Portfolio from './pages/Portfolio';

const SiteRoutes = () => (
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

function App() {
  return (
    <Router>
      <SiteRoutes />
      <Toaster />
    </Router>
  );
}

export default App;
