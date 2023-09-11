import Card from "./Card"

const DisplaySearchCard = (props) => {

const {
     apiData,
     addToFavoritesDb,
     reviewToggle,
     showAlert,
     setAlertMessage
    } = props

return (
    <>
        { apiData.map((data) =>
        <div className="relative">
            <Card
            {...data}
            addToFavoritesDb={() => addToFavoritesDb(data)}
            name="Add To Favorites"
            reviews="Click To View Ratings"
            reviewToggle={reviewToggle} 
            showAlert={showAlert}
            setAlertMessage={() => setAlertMessage("added")}
            />
        </div>
        )}
        
    </>
)

}

export default DisplaySearchCard