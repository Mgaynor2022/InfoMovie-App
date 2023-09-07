import { useContext } from "react"
import { DataContext } from "./MovieContext"
import Card from "./Card"


const DisplaySearchCard = () => {

const { apiData,addToFavoritesDb } = useContext(DataContext)

return (
    <>
        { apiData.map((data) =>
        <>
            <Card
            {...data}
            addToFavoritesDb={() => addToFavoritesDb(data)}
            />
        </>
        )}
    </>
)

}

export default DisplaySearchCard