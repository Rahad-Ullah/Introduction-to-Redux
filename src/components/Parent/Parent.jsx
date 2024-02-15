import { useState } from "react";
import Child_1 from "../Child_1/Child_1";
import Child_2 from "../Child_2/Child_2";


const Parent = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div className="border-2 border-yellow-500 rounded-md p-6">
            <p className="text-left mx-2 font-medium">Parent</p>

            <Child_1 counter={counter} setCounter={setCounter}/>
            <Child_2 counter={counter} setCounter={setCounter}/>
        </div>
    );
};

export default Parent;