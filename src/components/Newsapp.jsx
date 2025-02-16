import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'


const Newsapp = () => {
  const [search,setSearch]=useState("India")
  const [NewsData,setNewsData]=useState(null)
  const API_KEY="a435b5dfaf094378979e237cc6365b2d"
  const getData=async function() {
    const response=await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData=await response.data
    setNewsData(jsonData.articles)
    console.log("Search for",search)
  }
  useEffect(()=>{
    getData()
  },[])

  const handleinput=(e)=>{
    setSearch(e.target.value)
  }
  const userInput=(e)=>{
    setSearch(e.target.value);
    getData()
    

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
          <input type='text'value={search} placeholder='Search News' onChange={handleinput}/>
          <button onClick={getData}>Search</button>
          
        </div>
      </nav>
      <p>Stay update with TrendyNews!</p>
      <div className='categoryBtn'>
        <button onClick={userInput} value={"Sports"}>Sports</button>
        <button onClick={userInput} value={"Politics"}>Politics</button>
        <button onClick={userInput} value={"Health"}>Health</button>
        <button onClick={userInput} value={"Entertainment"}>Entertainment</button>
        <button onClick={userInput} value={"Fitness"}>Fitness</button>
        <button onClick={userInput} value={"Automobiles"}>Automobiles</button>
        
      </div>
      <div>
      {NewsData?<Card data={NewsData}/>:null}
      </div>
    </div>
  )
}

export default Newsapp