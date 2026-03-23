import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "Dashboard", element: <Dashboard /> },
      { path: "create-ticket", element: <TicketForm /> },
      { path: "ticket-list", element: <TicketList /> },
    ],
  },
]);
function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
