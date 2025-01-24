import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Newsapp = () => {
  const [Search,setSearch]=useState("hansi")
  const API_KEY="a435b5dfaf094378979e237cc6365b2d"
  const getData=async function() {
    const response=await axios.get(`https://newsapi.org/v2/everything?q=${Search}&apiKey=${API_KEY}`)
    const jsonData=await response.data
    console.log(jsonData)
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
          <input type='text' placeholder='Search News'/>
          <button onClick={getData}>Search</button>
          
        </div>
      </nav>
      <div>
        
      </div>
    </div>
  )
}

export default Newsapp