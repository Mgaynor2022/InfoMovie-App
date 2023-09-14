import { useContext, useEffect } from "react";
import { DataContext } from "./MovieContext";
import Card from "./Card";
import { motion } from "framer-motion";
import Alert from "./Alert";

const DisplayFavoriteCard = () => {
  const {
    favorites,
    deleteFavoriteDb,
    getFavorites,
    toggleAlert,
    showAlert,
    setAlertMessage,
    alertMessage,
  } = useContext(DataContext);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((data) => (
            <div key={data._id}>
              <Card
                data={data}
                {...data}
                addToFavoritesDb={() => deleteFavoriteDb(data._id)}
                name="Delete From favorites"
                showAlert={showAlert}
                setAlertMessage={() => setAlertMessage("deleted")}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <div className=" w-1/2 absolute top-1/2 transform translate-x-1/2 translate-y-1/2">
        {toggleAlert && <Alert alertMessage={alertMessage} />}
      </div>
    </>
  );
};

export default DisplayFavoriteCard;
