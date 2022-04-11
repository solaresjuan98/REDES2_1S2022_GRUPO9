import React from 'react'
import { AdminCard } from '../components/AdminCard';
import { useAdmin } from '../hooks/useAdmin';


export const AdminPage = () => {

  const { admins } = useAdmin();

  return (
    <div className='container mt-5'>
      <h1>Admin Page</h1>
      <hr />

      <div className="row">
        {
          admins?.map((admin, i) => (
            <div className="col-4">
              <AdminCard admin={admin} key={i} />
            </div>
          ))
        }
        {/* <div className="col-4">
          <AdminCard />
        </div>
        <div className="col-4">
          <AdminCard />
        </div>
        <div className="col-4">
          <AdminCard />
        </div> */}
      </div>

    </div>
  )
}
