import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export const AppRoutes = () => {
    return <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
    </Routes>
}