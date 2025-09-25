import { describe,expect,test } from "vitest";
import{render,screen} from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', ()=>{
    test('should rendder firstName and lastName',()=>{
        const {container} = render(<MyAwesomeApp/>);

        render(<MyAwesomeApp/>);

        const h1 = container.querySelector('h1');
        expect(h1?.innerHTML).toContain("Crhistofer");

        const h3 = container.querySelector('h3');
        expect(h3?.innerHTML).toContain("Vera");
        


    });
    test('should rendder firstName and lastName - Screen',()=>{
        render(<MyAwesomeApp/>);
        screen.debug();

        //const h1 = screen.getByRole('heading',{
        //    level:1
        //});
        const h1 = screen.getByTestId("first-name-title");
        expect(h1.innerHTML).toContain("Crhistofer");
    });

    test("should match snapshot", ()=>{
        const {container}= render(<MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
    })
});