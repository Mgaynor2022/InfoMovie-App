import { useContext, useEffect } from "react"
import { DataContext } from "./MovieContext"
import Card from "./Card"



const DisplayFavoriteCard = () => {

    const {

        favorites,
        deleteFavoriteDb,
        getFavorites

    } = useContext(DataContext)

    useEffect(() => {
        getFavorites()

    }, [])


    return (
        <>
            { favorites.map((data) =>
            <>
                <Card
                data={data}
                {...data}
                addToFavoritesDb={() => deleteFavoriteDb(data._id)} 
                />
            </> 
            )}
        </>
    )
}

export default DisplayFavoriteCard