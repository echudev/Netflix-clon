import { useEffect, useState } from 'react'
import { generateRandom } from '.././utils/generateRandom'
import axios from 'axios'

export const useGetBanner = (type, collection, lang, page) => {
  const i = generateRandom(0, 19) // que va a seleccionar entre los 20 items del array collection al azar
  const [data, setData] = useState({ // almaceno el item seleccionado en data
    loading: true,
    data: null,
    logo: null,
    error: null
  })

  const baseURL = 'https://api.themoviedb.org/3'
  const key = '5bb03364720dd995704773221faeb9ba'
  const url = `${baseURL}/${type}/${collection}?api_key=${key}&language=${lang}&page=${page}`

  const getData = async (url) => {
    try {
      const response = await axios(url)
      const id = response.data.results[i].id
      const url2 = `${baseURL}/${type}/${id}?api_key=${key}&language=${lang}&append_to_response=videos,images`
      const response2 = await axios(url2)

      response2.data.images.logos.length > 0 // verifica si hay logo en la api
        ? setData({
          loading: false,
          data: response2.data,
          logo: response2.data.images.logos.find(logo => logo.iso_639_1 === lang).file_path, // filtro el logo en inglés (en español hay pocos logos)
          error: null
        })
        : setData({
          loading: false,
          data: response2.data,
          logo: null, // si no hay logo le asigno null y muestro title (o name) en su lugar
          error: null
        })
    } catch (error) {
      setData({
        loading: false,
        data: null,
        logo: null,
        error
      })
      console.log(error)
    }
  }

  useEffect(() => {
    getData(url)
  }, [])

  return [data.loading, data.data, data.logo, data.error]
}
