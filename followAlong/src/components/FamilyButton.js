import React,{useContext} from "react";
import MyContext from "../Context/MyContext";

const FamilyButton=()=>{
    const { activeFamily, setActiveFamily, families}=useContext(MyContext)
    return(
        <section className="header">
            <h1>Family Trees</h1>
            {families.map(family => (
                <button
                    className={`family-button ${family.familyName ===
                        activeFamily.familyName && "active"}`}
                    key={family.familyName}
                    onClick={() => setActiveFamily(family)}
                >
                    {family.familyName}
                </button>
            ))}
        </section>

    )
}

export default FamilyButton;