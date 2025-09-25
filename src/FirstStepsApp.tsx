import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCard {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCard[]= [
    {productName: "Pc gamer", quantity: 3},
    {productName: "Xbox one", quantity: 2},
    {productName: "Mouse Gamer", quantity: 6},
    {productName: "Play station 5", quantity: 1},
]


export function FirstStepsApp() {
    return (
    <>    
        <h1>Carrito de compras</h1>

        {
            itemsInCart.map(({productName,quantity}) =>(
                <ItemCounter key={productName} name={productName} quantity={quantity}/>
            ))
        }

        { /*<ItemCounter name = "Nintendo switch 2" quantity={3} />
        <ItemCounter name = "play station 5" quantity={1} />
        <ItemCounter name = "Xbox Series X" quantity={1}/> */}
    </>
    )
}