import { EVENTS } from "./consts"

export const navigate =(href)=>{
     window.history.pushState({},'',href)
     
     const navigationEvent=new Event(EVENTS.PUSHSTATE)
     window.dispatchEvent(navigationEvent)
   }
   
// eslint-disable-next-line react/prop-types
export function Link ({target ,to,...props})  {
     const handleClick=(event)=>{
          
          const isMainEvent = event.button===0
          const isModifiedEvent = event.metaKet || event.altKey || event.ctrlKey || event.shiftKey
          const isManaeableEvent = target === undefined || target === '_self'
          if(isMainEvent && isManaeableEvent && !isModifiedEvent){
               event.preventDefault()
               navigate(to)

          }
     }
  return <a href={to} onClick={handleClick} target={target} {...props}/>
}