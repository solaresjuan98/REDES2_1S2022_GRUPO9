import React from 'react'
import { DevCard } from '../components/DevCard';
import { useDev } from '../hooks/useDev';
//require('dotenv').config()

export const DevPage = () => {

  const { developers } = useDev();

  return (
    <div className='container mt-5'>
      <h1>Developers</h1>
      <hr />


      <div className="row">
        {
          developers?.map((developer, i) => (
            <div className="col-4">
              <DevCard developer={developer} key={i} />
            </div>
          ))
        }
        {/* <div className="col-4">
          <DevCard />
        </div>
        <div className="col-4">
          <DevCard />
        </div>
        <div className="col-4">
          <DevCard />

        </div> */}
      </div>


    </div>
  )
}
