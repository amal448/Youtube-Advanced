import { YOUTUBE_SEARCH_API, YOUTUBE_LIST_API } from '../utils/constants';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from '../redux/searchSlice';
import { addSelect } from '../redux/mapSlice';
const useSearch = () => {

    const [querysearch, setQuerySearch] = useState([])
    const [search, setSearch] = useState("")
    const [show,setShow]=useState(false)

    const searchCache=useSelector(state=>state.search)
    const dispatch=useDispatch()

    useEffect(() => {
        const timer=  setTimeout(() => {
            if(searchCache[search]){
                setQuerySearch(searchCache[search])
            }
            else{
                handleApi()
            }
          }, 200)
          return () => {
            clearTimeout(timer)
          }
        }, [search])
        
        
        async function handleApi() {
          const data = await fetch(YOUTUBE_SEARCH_API + search)
          const json = await data.json()
          setQuerySearch(json[1])
          setShow(true)
          dispatch(cacheResults({
            [search]:json[1]
          }))
        }
        async function handleSubmit(){
            const data = await fetch(YOUTUBE_LIST_API + search)
          const json = await data.json()
          dispatch(addSelect(json.items))
          console.log("list",json);
          setShow(false)
          
        }

  return {setSearch,search,querysearch,handleSubmit,show}
}

export default useSearch