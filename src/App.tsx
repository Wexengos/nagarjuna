import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';
import './styles/global.css';
import MainTitle from "./components/MainTitle";

function App() {
  return (<>
    <BrowserRouter>
      <MainTitle />
      <AppRoutes />
    </BrowserRouter>
  </>
  )
}

export default App
