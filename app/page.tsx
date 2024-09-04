import Link from "next/link";
import Button from "./Button";


export default function Home() {
  return (
    <>
      <div className="bg-green-700 pb-12 rounded-2xl pt-4 relative z-10">
        <div className="flex justify-center">
          <div className="space-y-9 pl-2 pr-2">
            <h1 className="font-extrabold text-5xl text-center">Grocery Assistent</h1>
            <p className="text-center font-medium text-2 line-clamp-5">
            Tired of not knowing what to make for dinner? What about forgetting an ingredient at the store? 
              That’s where the Grocery Assistant comes in. Search thousands of recipes and create a grocery list to be sure you’re eating good tonight.
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-6 gap-x-11">
          <Button text="Assistent"></Button>
          <Link href="/list">
            <Button text="List"></Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="realative bg-white rounded-3xl w-3/4 flex justify-center items-center h-12 z-20 -mt-6 max-w-3/4">
          <input className="w-full rounded-2xl text-center placeholder-gray-500" placeholder="Search Here"></input>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <Button text="Search"></Button>
      </div>
      
    </>
  );
}

