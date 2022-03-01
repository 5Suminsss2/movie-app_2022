import {useEffect, useState} from "react";

function Hello() {
  useEffect(()=> { //false일때 완전히 지워지고 true일때 다시 refresh되어서 show이면 콘솔창에 등장
    console.log("created :) ");
    return () =>  console.log("destroyed :( ");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show" }</button>
    </div>
  );
}

export default App;
