import { useEffect, useState } from "react";
import { api } from "../../lib/api/api"
import "./page.css"
import type { Cocktail } from "../../types";
import { useRouter } from "next/navigation";


export const CocktailById = (params: {id?: string, cocktelin?: Cocktail, onSelect?: () => void}) =>{
    const id = params.id;
    const paramsCharacter = params.cocktelin;

    const router = useRouter();


    const [cocktail, setCocktail] = useState<Cocktail | null>(paramsCharacter ? paramsCharacter : null);
 



    return (
        <>
            {cocktail ? <div className="characterContainer">
              <div className="unPersonaje">
                <img src={cocktail?.strDrinkThumb!}></img>
                <div className="characterDataContanier">
                     <h1 className="Nombre">{cocktail?.strDrink}</h1>
                    <p className="Categoria"> Categoria: {cocktail?.strCategory}</p>
                    <p className="Alcoholic"> Alcoholico: {cocktail?.strAlcoholic}</p>
                   
                    <p>
                        <button className="botonVer" onClick={()=> router.push(`/cocktail/${cocktail.idDrink}`)} >Ver a {cocktail?.idDrink}</button>
                    </p>
                </div>
            </div>
            
            </div> : <p>Loading...</p>}
        </>
    )
}