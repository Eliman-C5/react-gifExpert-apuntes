import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/gifExpertApp"

describe('Pruebas en <GifExpertapp />', () => {

  test('should', () => {
  
    render(<GifExpertApp />);
    screen.debug();
  
  })

})