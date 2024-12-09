import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className="w-full mt-2">
        <div className=" md:h-64  bg-cover sm:bg-cover bg-no-repeat bg-[url('../public/img/hero.jpg')] ">
          <h1 className="text-5xl sm:text-7xl font-sans font-semibold w-full text-center py-16">FoodHub</h1>
        </div>
      </section>
    </>
  );
}

export default App;
