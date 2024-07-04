import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { getCategories } from './api';
import Home from './pages/Home/Home';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: getCategories
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RouterProvider
          router={router}
        />
      <footer></footer>
    </div>
  );
}

export default App;
