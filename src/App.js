import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

export const UserNameContext = React.createContext();

function App() {
  return (
    <UserNameContext.Provider value="Jim">
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    </UserNameContext.Provider>
  );
}

export default App;
