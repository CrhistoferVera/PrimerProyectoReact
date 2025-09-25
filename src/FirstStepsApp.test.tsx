import { render , screen} from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((props:unknown)=>{
    return (<div data-testid="ItemCounter" />)
})

vi.mock("./shopping-cart/ItemCounter",()=>({
    ItemCounter:(props:unknown)=> mockItemCounter(props)
}))

/*
vi.mock("./shopping-cart/ItemCounter",()=>({
    ItemCounter: (props: unknown)=> <div data-testid="ItemCounter" 
    name={props.name} 
    quantity={props.quantity}/>
}))
    */



describe('First StepsApp',()=>{

    afterEach(()=>{
        vi.clearAllMocks();
    })

    test('should match snapshot',()=>{
        const {container}= render(<FirstStepsApp />);
        expect (container).toMatchSnapshot();
    })

    test('should render the correct number of ItemCounter components',()=>{
        render(<FirstStepsApp/>);

        const ItemCounters = screen.getAllByTestId("ItemCounter");
        expect(ItemCounters.length).toBe(4);

        screen.debug();
    })

    test("should render ItemCounter with correct props",()=>{
        render(<FirstStepsApp/>);
        expect(mockItemCounter).toHaveBeenCalledTimes(4);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Pc gamer", quantity: 3
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Xbox one", quantity: 2
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Mouse Gamer", quantity: 6
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Play station 5", quantity: 1
        });
    });

})