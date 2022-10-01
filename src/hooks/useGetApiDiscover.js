import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetApiDiscover = (type, sortBy, genres, lang, page) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    collection: null,
    individualURL: null
  })

  const baseURL = 'https://api.themoviedb.org/3'
  const key = '5bb03364720dd995704773221faeb9ba'
  const url = `${baseURL}/discover/${type}?api_key=${key}&sort_by=${sortBy}&with_genres=${genres}&language=${lang}&page=${page}&vote_count.gte=50`

  const getData = async (url) => {
    try {
      const response = await axios(url)
      for (let i = 0; i < response.data.results.length; i++) {
        const moreDataURL = `${baseURL}/${type}/${response.data.results[i].id}?api_key=${key}&language=${lang}&append_to_response=videos,images`
        response.data.results[i].more_data_url = moreDataURL
      }
      setData({
        loading: false,
        error: null,
        collection: response.data
      })
    } catch (error) {
      setData({
        loading: false,
        error,
        collection: null,
        individualURL: null
      })
      console.log(error)
    }
  }

  useEffect(() => {
    getData(url)
  }, [])

  return data
}
