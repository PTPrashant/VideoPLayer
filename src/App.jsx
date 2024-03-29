
import React from "react";
import Heading from "./Component/Heading";
import ErrorBoundaries from "./Component/ErrorBoundaries"
import PLayList from "./Component/PLayList";
// import PLayer from "./Component/PLayer";
// const PlayerComp = React.lazy(()=> import("./Component/PLayer"))
const PlayerComp2 = React.lazy(()=> import("./Component/PLayer2"))
import ContextProvider from './Context/ContextProvider.jsx'



function App() {

  return (
    <>
    <ContextProvider>

      <Heading/>
      <ErrorBoundaries >
      <React.Suspense fallback='Page Loading .. Please Wait'>
      <PlayerComp2 />
      </React.Suspense>
      </ErrorBoundaries>
      <PLayList/>
    </ContextProvider>

    </>
  );
}

export default App;
