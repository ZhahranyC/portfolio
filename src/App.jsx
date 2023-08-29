import { useEffect, useRef, useState } from "react";

import Nav from "./components/navigation/Nav";
import SectionProvider from "./store/SectionProvider";
import SectionsContainer from "./UI/SectionsContainer";

function App() {
  return (
    <SectionProvider>
      <main className=" w-full h-screen bg-main-bg">
        <SectionsContainer />
        <Nav />
      </main>
    </SectionProvider>
  );
}

export default App;
