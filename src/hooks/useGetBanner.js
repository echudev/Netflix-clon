import { useEffect, useState } from 'react'
import { generateRandom } from '../../utils/random'
import axios from 'axios';

export const useGetBanner = (url) => {

    const i = generateRandom(0, 19);
    
    //se crea un estado para guardar la informacion de la api
    const [data, setData] = useState({
        loading: true,
        data: null,
        error: null
    });

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
            console.log(error)
        }
    }

    //se ejecuta una sola vez al inicio del componente
    useEffect(() => {
        getData(url);
    }, []);

    return [data.loading, data.data, data.error];
}