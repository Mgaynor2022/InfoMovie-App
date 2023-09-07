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
        <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-2 lg:grid-cols-3">
            { favorites.map((data) =>
            <>
                <Card
                data={data}
                {...data}
                addToFavoritesDb={() => deleteFavoriteDb(data._id)}
                name = "Delete From favorites"
                />
            </> 
            )}
        </div>
    )
}

export default DisplayFavoriteCard