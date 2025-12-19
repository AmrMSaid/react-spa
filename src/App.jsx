import { RouterProvider } from "react-router-dom";
import { routes } from "./router.jsx";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
