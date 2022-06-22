import React from "react";

const Main=()=>{
    return(
        <div>
            {
                sessionStorage.setItem("user_id", "darren_gwon")
            }
        </div>
    )
}

export default Main;