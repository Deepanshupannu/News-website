import React from "react";
const card=()=>{

    return(
        <div>
            {data.map((curItem,index)=>{
                return(
                    <div className="card">
                        <img/>
                        <div className="cardcontent">
                            <a href="">{curItem.title}</a>
                            <p></p>
                            <button>Read More</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}