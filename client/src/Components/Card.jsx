import React from "react"


const Card = (props) => {

  const {
    Poster,
    Title,
    Genre,
    Actors,
    Awards,
    Plot,
    Year,
    addToFavoritesDb,
    name,
    reviews,
    reviewToggle,
    showAlert,
    setAlertMessage,
    } = props

    const handleSubmit = (e) => {
      e.preventDefault()
      addToFavoritesDb()
      setAlertMessage()

    }

  return (

    <section className="movie-container flex flex-wrap justify-center flex--movie hover:scale-110 p-10">
      <div className="w-[420px] h-[500px] bg-transparent cursor-pointer group perspective">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">   
          <div className="absolute backface-hidden border-2 w-full h-full">  
            <img src={Poster} className="w-full h-full" />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
  <form onSubmit={handleSubmit} className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
    <h3 className="text-3xl font-semibold">{Title}</h3>
    <span className="my-2">{Year}, {Genre}</span>
    <span>{Actors}</span>
    <span>{Awards}</span>
    <p>{Plot}</p>

    <button 
    className="bg-black px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-700 hover:bg-gray-700 group-hover:bottom-20 scale-0 group-hover:scale-125"
    onClick={() => showAlert()}
    >
      {name}
    </button>
    <h1 onClick={reviewToggle} className="mt-10 text-red-500 underline">{reviews}</h1>
  </form>
</div>
</div>
</div>
</section>

  )

}

export default Card
