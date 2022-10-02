import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en < GifItem />', () => {

  const title = 'Saitama';
  
  const url = "https://one-punch.com/saitama.jpg";

  test('Debe de hacer match con el snapshot', () => {

    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  
  });
  
  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

    render(<GifItem title={title} url={url} />);
    //screen.debug();
    //expect( screen.getByRole('').src ).toBe( url );
    //expect( screen.getByRole('').alt ).toBe( title );
    //En vez de ir uno por uno comprobando los atributos, podemos desestructurarlos
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( alt );
    
  });
  
  test('Debe de mostrar el titulo en el componente', () => {
  
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText( title ));
  
  })

});

