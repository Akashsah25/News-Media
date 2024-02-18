import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Newsapi(category) {


    const [data, setdata] = useState(
        {
            newsdata: [],
            loading: true
        }
    );


    const fetchData = async () => {
        try {
            const responce = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5452af4b7bbd4ab8a5baf353b849d697`)

            const result = await responce.json()


            setdata({
                newsdata: result.articles,
                loading: false
            })


        } catch (error) {
            console.error("error fetch data", error.message)
        }
    }

    useEffect(() => { fetchData() }, [category])

    return (data)
};


