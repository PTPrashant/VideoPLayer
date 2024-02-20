
import React from "react";
import Heading from "./Component/Heading";
import ErrorBoundaries from "./Component/ErrorBoundaries"
// import PLayer from "./Component/PLayer";
// const PlayerComp = React.lazy(()=> import("./Component/PLayer"))
const PlayerComp2 = React.lazy(()=> import("./Component/PLayer2"))


function App() {

  return (
    <>
      <Heading/>
      <ErrorBoundaries >
      <React.Suspense fallback='Page Loading .. Please Wait'>
      <PlayerComp2 />
      </React.Suspense>
      </ErrorBoundaries>
    </>
  );
}

export default App;
