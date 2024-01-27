import Card from "./components/card/Card";
import "./App.css";
import { data } from "./data.js";

export default function App() {
  return (
    <>
    <h1 className="text-4xl text-center pt-3 font-semibold">Programming Notes for Professionals books</h1>
   <div className="container flex flex-row-reverse flex-wrap gap-12 justify-center py-6 px-32">
    {data.map((item)=>
      <Card item={item}/>
    ) }
   </div>
   </>
  )
}