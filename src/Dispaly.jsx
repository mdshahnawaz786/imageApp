import React, { useContext } from 'react'
import { myContext } from './App'
import './display.css'


const Dispaly = () => {

    const {apiData} = useContext(myContext)

    console.log(apiData);


  return (
    <div className='display'>
        {
            apiData.length > 0 ? <>

                {
                    apiData.map((ele)=>{
                        return(
                            <div className='innerDisplay'>
                                <img src={ele.cover_photo.urls.regular} />

                                <p className='p1'>Name: {ele.cover_photo.user.name}</p>
                                <p className='p2'>Updated At: {ele.cover_photo.user.updated_at}</p>
                            </div>
                        )
                    })
                }

            </> : <h3>invalid input</h3>
        }
    </div>
  )
}

export default Dispaly