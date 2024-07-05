import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { getCategories } from './api';
import Home from './pages/Home/Home';
import Result from "./pages/Result/Result";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: getCategories
    },
    {
      path: "/results",
      element: <Result />
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-fluid">
        <RouterProvider
          router={router}
        />
      </div>
      {/* <footer className="App-footer"></footer> */}
    </div>
  );
}

export default App;
