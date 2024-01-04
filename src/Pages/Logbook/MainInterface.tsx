import React, {useEffect} from "react";
import Login from "../../Components/Signin/Login";


const MainInterface: React.FC = () => {
    const handleScroll = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        handleScroll();
        [1]
    },

    );
    return (
        
        <>
            <div className=" bg-white h-screen w-full ">
             <Login/>
                
            </div>
        </>
    );
};

export default MainInterface;