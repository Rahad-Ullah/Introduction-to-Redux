import { createContext, useState } from "react";

export const COUNTER_CONTEXT = createContext()

const CounterContext = ({children}) => {

    const [counter, setCounter] = useState(0)

    const value = {
        counter,
        setCounter
    }

    return (
        <COUNTER_CONTEXT.Provider value={value}>
            {children}
        </COUNTER_CONTEXT>
    );
};

export default CounterContext;
