import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

//Nosotros no deberiamos poner esta funcion getGifs dentro de el componente, ya que cada vez que se renderice
//el componente, se volvera crear la funcion y esto es malo para la memoria
//Ademas, solo deberia ejecutarse una vez esta funcion. Y esto se logra con el useEffect
// export const getGifs = async ({ category }) => {

//   const url = `https://api.giphy.com/v1/gifs/search?api_key=hwat9o2tpUvXaTsnFuC0kccxWBa0IuY0&q=${category}&limit=20`;
  
//   const res = await fetch(url);
  
//   const {data} = await res.json();
  
//   const gifs = data.map( img => ({
//     id: img.id,
//     title: img.title,
//     url: img.images.downsized_medium.url,
//   }))
  
//   console.log(gifs);
//   return gifs;
// }


export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );

  //const [images, setImages] = useState([]);
  
  //A LA HORA DE CONSUMIR UNA API
  //1 (PRIMER PASO)
  //Si queremos usar async-await debemos crear una funcion de este estilo fuera del useEffect
  // const getImages = async () => {
  //   const newImages = await getGifs( category );
  //   console.log(newImages);
  //   setImages(newImages);
  // }

  // useEffect(() => {
  //   //2 (SEGUNDO PASO)
  //   //Para consumir bien las apis, debe usar la funcion que usa el fecth y then para interactuar con la respuesta
  //    //getGifs(category)
  //     // .then(newImages => setImages(newImages));
      
  //   getImages()
  // }, [])
  
  return (
    <>
      <h3>{ category }</h3>
      
      {
        isLoading 
        && <h2>Cargando...</h2>
      }
      
      <div className="card-grid">
      {
        //Cuando hay muchas propiedades para enviar, se utiliza el spread operator
        images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))
      }
      </div>
    </>
  )
}