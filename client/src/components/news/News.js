import React, { useEffect, useState } from 'react'
import "./News.css";

export const News = () => {

      const [mynews , setMyNews] = useState([]);
      const fetchData = async () => {
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f7c68123e58c405a8d4c1fa6ef335ce0")
        let data = await response.json();
        setMyNews(data.articles)
      }
      

      useEffect(() => {
        fetchData();
      },[])

  return (
    <>
    <div className='mainDiv'>
    {
        mynews.map((ele) => {
            console.log(ele)
            return(
                <>
                
                   <div class="card" style={{ marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                    
  {/* <img src={ele.urlToImage} class="card-img-top" alt="..."/> */}
  <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} class="card-img-top" alt="..." />
  <div class="card-body">
    {/* <h5 class="card-title">{ele.author}</h5> */}
    <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
    <p class="card-text">{ele.title}</p>
    <a href={ele.url} target='_blank' class="btn btn-primary">Read More</a>
  </div>
</div>

                </>
            )
        })
    }
   
</div>
    </>
  )
}
