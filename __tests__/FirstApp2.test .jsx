import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <First app/>", () => {
  //   test("Debe hacer match con el snapshot", () => {
  //     const title = "Hola mundo";

  //     const { container } = render(<FirstApp title={title} />);
  //     //console.log(container);
  //     expect(container).toMatchSnapshot(); //snapshot es una imagen de un componente, comprueba si el componente es igual a la imagen
  //   });

  //   test("Debe mostrar el titulo en un H1", () => {
  //     const title = "Hola soy Mauricio";

  //     const { container, getByText } = render(<FirstApp title={title} />);

  //     //getByText es una funcion que busca un elemento por texto
  //     //toBetruthy es una funcion que comprueba si el elemento existe

  //     expect(getByText(title)).toBeTruthy();

  //     const h1 = container.querySelector("h1");

  //     //toContain es una funcion que comprueba si el elemento contiene el texto sin importar si tiene espacios

  //     expect(h1.innerHTML).toContain(title);
  //   });

  test("Debe mostrar el titulo en un H1", () => {
    const title = "Hola soy Mauricio";

    const { getByText, getByTestId } = render(<FirstApp title={title} />);
    //obs
    //toBe se asegura que sea el mismo dato el mismo en todo sentido
    //toBeTruthy es una funcion que comprueba si el elemento existe
    //toContain tiene que contener el texto sin importar si tiene espacios
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe mostrar el subtitulo por props", () => {
    const title = "Hola soy goku";
    const subtitle = "Hola soy un subtitulo";

    const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} />);
    //obs
    //toBe se asegura que sea el mismo dato el mismo en todo sentido
    //toBeTruthy es una funcion que comprueba si el elemento existe
    //toContain tiene que contener el texto sin importar si tiene espacios
    //getAllByText en el caso que queramos buscar todos los elementos que contengan el texto, devuelve un array con todos los elementos que contienen el texto

    expect ( screen.getAllByText(subtitle).length ).toBe(2); //lo filtramos por el length para que nos devuelva el numero de elementos que contienen el texto
    //si tenemos mas de un elemento
  });
});
