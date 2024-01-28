import Card from "./components/card/Card";
import "./App.css";
import { data } from "./data.js";

export default function App() {
  return (
    <>
    <h1 className=" text-3xl sm:text-4xl text-center py-3 font-semibold">Programming Notes for Professionals books</h1>
   <div className="container flex flex-row flex-wrap gap-12 justify-center md:py-6 md:px-32">
    {data.map((item)=>
      <Card item={item}/>
    ) }
   </div>
   </>
  )
}