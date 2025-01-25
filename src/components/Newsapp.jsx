import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'


const Newsapp = () => {
  const [search,setSearch]=useState("hansi")
  const [NewsData,setNewsData]=useState(null)
  const API_KEY="a435b5dfaf094378979e237cc6365b2d"
  const getData=async function() {
    const response=await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData=await response.data
    setNewsData(jsonData.articles)
    console.log(jsonData.articles)
  }

  const handleinput=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>

        </div>
        <ul>
          <a href="">All news</a>
          <a href="">Trending</a>
        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='Search News' onChange={handleinput}/>
          <button onClick={getData}>Search</button>
          
        </div>
      </nav>
      <p>Stay update with TrendyNews!</p>
      <div className='categoryBtn'>
        <button>Sports</button>
        <button>Politics</button>
        <button>Health</button>
        <button>Entertainment</button>
        <button>Fitness</button>
        <button>Automobiles</button>
        
      </div>
      <div>
      {NewsData?<Card data={NewsData}/>:null}
      </div>
    </div>
  )
}

export default Newsapp