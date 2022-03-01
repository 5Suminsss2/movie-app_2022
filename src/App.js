import {useEffect, useState} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
 
  //어떤 state가 바뀌든지 바뀌면 맨날 실행
  console.log("I run all the time")
  // 처음 시작할때만 실행
  useEffect(() => {
    console.log("I run only once");
  }, []); 
  //keyword가 변화할 때만 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]); 
  //counter가 변화할 때만 실행
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]); 
  // 합치기 가능
  useEffect(() => {
    console.log("I run when 'counter' and 'keyword' changes");
  }, [keyword, counter]); 
  
  return (
    <div>
      <input value={keyword} onChange={onChange} placeholder="Search..." type="text" />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
