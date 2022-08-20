
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

// test: debe de hacer match con el snapshot
//test: debe de mostrar el valor inicial de 100

// describe('CounterApp', () => { 

//     const valor = 20;

//     test('hacer match con el snapshot', () => {

//         const {container} = render(<CounterApp value={valor} />); 

//         expect(container).toMatchSnapshot();

//     })

//     test('mostrar el valor inicial de 100', () => {

//         render(<CounterApp value={valor} />); 

//         expect( screen.getByText('20')).toBeTruthy();

//          expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('20')

//     })

// })

describe('CounterApp captuando eventos', () => {

    const valor = 20;

    test('debe incrementar con el boton +1', () => {

        render(<CounterApp value={valor} />);

        //primeramente ejecutamos un evento con fireEvent
        fireEvent.click(screen.getByTestId('btnReset')); //capturamos el boton reset

        expect(screen.getByTestId('btnReset')).toBeTruthy(); //verificamos que el boton reset exista

        expect(screen.getByText(valor)).toBeTruthy(); //verificamos que el valor inicial sea 20



    })



})