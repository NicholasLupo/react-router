import { createContext, useContext, useState } from "react";

const CountContext = createContext()

function BudgetContext({ children }) {

    const [count, setCount] = useState('false')

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )

}

function useCount() {
    const context = useContext(CountContext)
    return context;
}

export { BudgetContext, useCount }