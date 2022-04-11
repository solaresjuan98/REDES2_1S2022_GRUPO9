import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Develop, DevlopResponse } from '../helpers/interfaces'

export const useDev = () => {

    const [developers, setDevelopers] = useState<Develop[]>()
    const getDevelopers = async () => {
        
        await axios.get(`${process.env.REACT_APP_BACKEND}/api/develop`)
            .then((res) => {
                console.log(res.data)
                setDevelopers(res.data.develop)
            })
    }


    useEffect(() => {
    
        getDevelopers();
    
    }, [])
    

    return {
        developers,

    }

}
