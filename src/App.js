import './App.css';
import NavBar from './layouts/NavBar';
import AllRecipes from './components/AllRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllRecipes/>}/>
        <Route path="/recipedetails/:id" element={<RecipeDetails/>}/>
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
