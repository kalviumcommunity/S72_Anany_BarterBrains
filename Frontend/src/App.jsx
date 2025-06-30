import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsMarketplace from "./components/SkillsMarketplace";
import Gamification from "./components/Gamification";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SkillsMarketplace />
        <Gamification />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
