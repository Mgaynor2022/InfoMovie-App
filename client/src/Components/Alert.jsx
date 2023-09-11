import {FaCheck} from 'react-icons/fa'
import {RiDeleteBin6Fill} from 'react-icons/ri'

const Alert = (props) => {

    const {
        alertMessage
    } = props

    return (
        <>
        {alertMessage === "added" ? 
        <div className="absolute opacity-95 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900  py-3 px-10 shadow-md">
            <div className="flex">
                <div className="py-1 mx-5">
                    <FaCheck size={"2.5rem"} />
                    </div>
                <div>
                <p className="font-bold"> Movie Or show Poster Has Been Added To Your Favorites List</p>
                <p className="text-sm">Click The Favorites Tab On The Navbar To View Your Favorites. </p>
                </div>
            </div>
        </div>
        :
        <div className="absolute opacity-95 bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900  py-3 px-10 shadow-md">
            <div className="flex justify-center">
                <div className="py-1 mx-5">
                    <RiDeleteBin6Fill className='text-red-500' size={"2.5rem"} />
                    </div>
                <div>
                <p className="font-bold"> Movie Or show Poster Has Been Deleted From Your Favorites List</p>
                </div>
            </div>
        </div>

        } 
        
        </>
    )

}

export default Alert