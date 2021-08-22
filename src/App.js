import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
  const [userName, setUserName] = useState("Adam");

  return (
    <main>
      <Header userName={userName} />
      <Content userName={userName} onUpdateUserName={setUserName} />
      <Footer userName={userName} />
    </main>
  );
}

export default App;
