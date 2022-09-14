import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState("");
  
  const onInputChange = (e) => {
    //console.log(e.target.value)
    setinputValue(e.target.value);
  }
  
  //Si quieres evitar mandar tanto el state como el setState, puedes hacer una funcion callback en el onSubmit
  //La cual te permitira capturar los valores anteriores
  //Imaginemos que este componente recibe setCategories, necesitariamos category para actaulizarlo. Pero
  //Podemos omitirlo por medio de un callback
  //( (categories) => [...categories, inputValue] )
  const onSubmit = (e) => {
    e.preventDefault();
    
    //Con esto validamos que haya al menos una letra. De no ser asi entonces el return hace que se salga de la
    //Funcion. Tambien puede hacerse con la validacion entre llaves del if, pero de esta manera se evita el scope
    //Y se escribe codigo mas corto y entendible
    if (inputValue.trim().length <= 1) return
    
    //El onNewCategory esta enviando un valor al padre. En pocas palabras
    //Es una prop que en vez de recibir un valor, envia un valor
    onNewCategory( inputValue.trim() );
    setinputValue("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
      type='text'
      placeholder="Buscar Gifs"
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
  )
}