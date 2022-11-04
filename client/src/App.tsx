import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Users from "./views/Users";
import Books from "./views/Books";

function App() {
  const [content, setContent] = useState("Inicio");

  return (
    <div className="bg-gray2b min-h-screen text-white">
      <Header />
      <Layout setContent={setContent} content={content}>
        {content === "Inicio" ? (
          <Home />
        ) : content === "Usuarios" ? (
          <Users />
        ) : (
          <Books />
        )}
      </Layout>
    </div>
  );
}

export default App;
