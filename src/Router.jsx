import { useEffect, useState } from "react";
import {EVENTS} from './consts'
import {match} from 'path-to-regexp'
// eslint-disable-next-line react/prop-types
export function Router ({routes=[],defaultComponent:DefaultComponent =()=><h2>404</h2>}){
     const [currentPath, setCurrentPath] = useState(window.location.pathname)
     useEffect(() => {
       const onLocationChange = ()=>{
         setCurrentPath(window.location.pathname)
       }
       window.addEventListener(EVENTS.PUSHSTATE,onLocationChange);
       window.addEventListener(EVENTS.POPSTATE,onLocationChange);
       return ()=>{
         window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange);
         window.removeEventListener(EVENTS.POPSTATE,onLocationChange);
       }
   
     }, [])

     let routeParams={}
     const Page = routes.find(({path})=>{ 
      if (path === currentPath) return true
      const matchUrl=match(path, {decode: decodeURIComponent})
      const matched = matchUrl(currentPath)
      if(!matched) return false

      routeParams = matched.params
      return true
    })?.Component


     return Page ? <Page routeParams ={routeParams}/> :<DefaultComponent routeParams ={routeParams}/>
   }