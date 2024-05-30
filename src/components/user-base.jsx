import React from "react";
import "./../css/userbase.css";

function Userbase({children}) {

    return (
        <>
            <div style={{ marginTop: "50px", width: "100%", overflow: "auto" }}>
                {children}
            </div>
        </>
    );
}

export default Userbase;
