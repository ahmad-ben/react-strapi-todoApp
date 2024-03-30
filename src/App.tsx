import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <main>
      <Toaster />
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
