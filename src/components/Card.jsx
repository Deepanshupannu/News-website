import React from "react";
const Card=({data})=>{
    console.log(data);
  

    return(
        <div className="cr">
            {data.map((curItem,index)=>{
                return(
                    <div className="card">
                        <img src={curItem.urlToImage}/>
                        <div className="cardcontent">
                            <a href={curItem.url}>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button onClick={()=>window.open(curItem.url)}>Read More</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Card