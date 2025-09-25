import { useState } from "react";


import './itemCounter.css';

interface Props {
    name: string;
    quantity?: number;
};


export const ItemCounter = ({name,quantity= 1}:Props) => {

    const [count, setCount] = useState(quantity);
    const handleAdd = ()=>   { 
        setCount(count+1);}
    const handleSubtract = ()=> {
        if(count ===1) return;
        setCount(count-1);
    }

    
    
    return (
    <section className="item-row"
    /*style={{
        display: "flex",
        alignItems: "center",
        gap:10,
        marginTop: 15
    }
    }*/
    >
        <span style={{
            color: count === 1 ? 'red': 'black'
        }} className="item-text">{name}</span>
        <button onClick={handleAdd}
        >+1</button>
        <span>{count}</span>
        <button onClick={handleSubtract}>-1</button>
    </ section>
    )
}
