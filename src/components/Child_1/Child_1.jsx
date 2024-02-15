import { useState } from "react";

const Child_1 = () => {
    const [counter, setCounter] = useState(0)
    
    return (
        <div className="w-1/2 mx-auto border-2 border-green-500 pb-8">
            <p className="m-4 mx-6 font-medium">Child-1</p>
            <div className="flex justify-center items-center gap-4 pt-6">
                <button onClick={() => counter > 0 && setCounter(prev => prev - 1)} className="bg-red-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-red-700">Decrement</button>
                <h3 className="text-4xl">{counter}</h3>
                <button onClick={() => setCounter(prev => prev + 1)} className="bg-emerald-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-emerald-700">Increment</button>
            </div>
        </div>
    );
};

export default Child_1;