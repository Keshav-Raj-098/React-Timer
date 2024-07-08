import { useState } from "react";
import Timer from "./components/timer.js";
import Popup from "./components/popup.js"

function App() {

  // const {deadlinedate,month,year,hour,minutes} = setTimer 

  const [func, setfunc] = useState("")
  const [load, setLoad] = useState(true)

  return (
    <>

      <Popup loadPopup={load} setTimer={setfunc} setLoad={setLoad}
      />

     {(load === false) && <Timer setTimer={func} />}
    </>
  );
}

export default App;
