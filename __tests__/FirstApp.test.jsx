import { render, screen } from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <First app/>", () => {
//   test("Debe hacer match con el snapshot", () => {
//     const title = "Hola mundo";

//     const { container } = render(<FirstApp title={title} />);
//     //console.log(container);
//     expect(container).toMatchSnapshot(); //snapshot es una imagen de un componente, comprueba si el componente es igual a la imagen
//   })


  test("Debe mostrar el titulo en un H1", () => {

    const title = "Hola, soy Goku"
    const { container  } = render(<FirstApp title={title}/>)
    expect (screen.getByText(title)).toBeTruthy()
  })
  
})
