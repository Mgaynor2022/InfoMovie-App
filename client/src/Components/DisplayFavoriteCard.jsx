import { useContext, useEffect } from "react"
import { DataContext } from "./MovieContext"
import Card from "./Card"
import { motion } from "framer-motion"



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
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
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
        </motion.div>
    )
}

export default DisplayFavoriteCard