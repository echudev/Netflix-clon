import { useEffect, useState } from 'react'
import axios from 'axios';


export const useGetAPI = (type, catalogue, lang, page) => {

    const [data, setData] = useState({
        loading: true,
        data: null,
        error: null
    });

    const baseURL = 'https://api.themoviedb.org/3';
    const key = '5bb03364720dd995704773221faeb9ba';

    //  type         movie, tv, person
    // catalogue    trending, top_rated, popular, airing_today, on_the_air, upcoming
    //  lang        en-US, es-ES, pt-BR, fr-FR, it-IT, ja-JP, ko-KR,
    //  page         1 a 20

    const url = `${baseURL}/${type}/${catalogue}?api_key=${key}&language=${lang}&page=${page}`;


    const getData = async (url) => {
        try {
            const response = await axios(url);
            setData({
                loading: false,
                data: response.data,
                error: null
            });
        }
        catch (error) {
            setData({
                loading: false,
                data: null,
                error: error
            });
            console.log(error);
        }
    };


    useEffect(() => {
        getData(url);
    }, []);

    return [data.loading, data.data, data.error];
}
