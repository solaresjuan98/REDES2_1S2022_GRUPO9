import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Admin } from '../helpers/interfaces';

export const useAdmin = () => {

    const [admins, setAdmins] = useState<Admin[]>()

    const getAdmins = async () => {

        await axios.get('/api/admin')
            .then((res) => {
                //console.log(res.data)
                setAdmins(res.data.admin)
            })

    }

    useEffect(() => {

        getAdmins();

    }, [])


    return {
        admins
    }
}
