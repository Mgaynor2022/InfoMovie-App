import Card from "./Card"

const DisplaySearchCard = (props) => {

const {
     apiData,
     addToFavoritesDb,
     reviewToggle
    } = props

return (
    <>
        { apiData.map((data) =>
        <>
            <Card
            {...data}
            addToFavoritesDb={() => addToFavoritesDb(data)}
            name="Add To Favorites"
            reviews="Click To View Ratings"
            reviewToggle={reviewToggle}  
            />
        </>
        )}
    </>
)

}

export default DisplaySearchCard