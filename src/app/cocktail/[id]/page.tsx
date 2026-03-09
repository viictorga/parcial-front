"use client"
import { useParams } from "next/navigation"
import { Cocktail } from "@/types"
import { useState } from "react"
import { useEffect } from "react"
import "./page.css"
import { getCocktailById } from "@/lib/api/cocktail"
import { useRouter } from "next/navigation"
import Link from "next/link"



const UnCocktail = () =>{
    const router = useRouter();
    const {id} = useParams()
    let idBueno = Number(id);
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [miError, setError] = useState<string>("");

        
          useEffect(() => {
            getCocktailById(Number(idBueno)).then((res)=>{
                
                const arrayMiCocktail = res.data.drinks
                setCocktail(arrayMiCocktail[0])
                setError("")
            }).catch((e)=>{
              setError(`Error cargando los datos: ${e.message ? e.message: e}`)

            }).finally(()=>{
              setLoading(false);
            })
          }, [idBueno]);



    return(
  
    <div className="containerDetalle">

      {loading && <label>Loading...</label>}
      {miError && <label>{miError}</label>}

      {cocktail && (
        <>
          <h1>{cocktail.strDrink.toUpperCase()}</h1>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p>{cocktail.strInstructions}</p>
          <p>Categoria: {cocktail.strCategory}</p>
          <p>{cocktail.strAlcoholic}</p>
          <p>Vaso necesario: {cocktail.strGlass}</p>
          {cocktail.strIngredient1 && <p>Ingrediente 1: {cocktail.strIngredient1}   ///////   Cantidad: {cocktail.strMeasure1}</p>}
          {cocktail.strIngredient2 && <p>Ingrediente 2: {cocktail.strIngredient2}   ///////   Cantidad: {cocktail.strMeasure2}</p>}
          {cocktail.strIngredient3 && <p>Ingrediente 3: {cocktail.strIngredient3}   ///////   Cantidad: {cocktail.strMeasure3}</p>}
          {cocktail.strIngredient4 && <p>Ingrediente 4: {cocktail.strIngredient4}   ///////   Cantidad: {cocktail.strMeasure4}</p>}
          {cocktail.strIngredient5 && <p>Ingrediente 5: {cocktail.strIngredient5}   ///////   Cantidad: {cocktail.strMeasure5}</p>}
          {cocktail.strIngredient6 && <p>Ingrediente 6: {cocktail.strIngredient6}   ///////   Cantidad: {cocktail.strMeasure6}</p>}
          {cocktail.strIngredient7 && <p>Ingrediente 7: {cocktail.strIngredient7}   ///////   Cantidad: {cocktail.strMeasure7}</p>}
          {cocktail.strIngredient8 && <p>Ingrediente 8: {cocktail.strIngredient8}   ///////   Cantidad: {cocktail.strMeasure8}</p>}
          {cocktail.strIngredient9 && <p>Ingrediente 9: {cocktail.strIngredient9}   ///////   Cantidad: {cocktail.strMeasure9}</p>}
          {cocktail.strIngredient10 && <p>Ingrediente 10: {cocktail.strIngredient10}   ///////   Cantidad: {cocktail.strMeasure10}</p>}
          {cocktail.strIngredient11 && <p>Ingrediente 11: {cocktail.strIngredient11}   ///////   Cantidad: {cocktail.strMeasure11}</p>}
          {cocktail.strIngredient12 && <p>Ingrediente 12: {cocktail.strIngredient12}   ///////   Cantidad: {cocktail.strMeasure12}</p>}
          {cocktail.strIngredient13 && <p>Ingrediente 13: {cocktail.strIngredient13}   ///////   Cantidad: {cocktail.strMeasure13}</p>}
          {cocktail.strIngredient14 && <p>Ingrediente 14: {cocktail.strIngredient14}   ///////   Cantidad: {cocktail.strMeasure14}</p>}
          {cocktail.strIngredient15 && <p>Ingrediente 15: {cocktail.strIngredient15}   ///////   Cantidad: {cocktail.strMeasure15}</p>}
          
          {cocktail.strVideo && <Link className="linkVideo" href = {cocktail.strVideo!}><p>Link al video</p> </Link>}
        </>
      )}
      <button className= "botoncito"onClick={()=>router.back()}>Volver Atrás</button>

    </div>
  )

}
export default UnCocktail;