import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["One Punch"]);
  
  const onAddCategory = (newCategory) => {
    //Tenemos que validar que el array no tengo elementos con el mismo nombre para que no haya conflicto en las key
    //Podemos hacer eso de una forma sencilla
    if (categories.includes(newCategory)) return;
  
    //console.log(newCategory);
    setCategories([newCategory, ...categories])
  };
  
  return (
    <>
      {/* Titulo */}
      <h1>GiifiiExpertooApp</h1>
      
      {/* Input */}
      <AddCategory 
        onNewCategory={(value) => onAddCategory(value)}
      />
      
      {/* Listado de Gif */}
      { categories.map( category => (
          <GifGrid 
            key={category} 
            category={category}
          />
        ))
      }
      {/* Gif Item */}
    </>
  )
}