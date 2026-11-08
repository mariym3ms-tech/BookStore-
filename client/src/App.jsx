import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Shop } from './components/Shop';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Login } from './components/Login';

function Home() {
return (
<>
<Hero />
<Shop />
<About />
</>
);
}

export default function App() {
return (
<BrowserRouter>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
</Routes>
<Footer />
</BrowserRouter>
);
}