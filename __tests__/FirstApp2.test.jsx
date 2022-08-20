import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <First app/>", () => {
  const title = "Hola, Soy Goku";
  const subtitle = "Hola, soy Subtitle";

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor del titulo en un h1", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain(title)

  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
