import ListGroup from "./components/ListCroup";

function App(){
  let items = ["New York", "London"];
  const handleSelectItem = (item:string) =>{
    console.log(item)
  }
  return <div><ListGroup items = {items} heading = "Cities" onSelectItem={handleSelectItem}/></div>
}
export default App;