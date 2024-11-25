import React from 'react'
import { useParams } from 'react-router-dom'

function News() {
   const {slug} = useParams()
    return (
        <>
    <h1>News</h1>
    <h2>{slug}</h2>
   
    </>
  );
}

export default News
