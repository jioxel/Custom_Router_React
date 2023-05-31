import {describe,expect,it,vi} from "vitest"
import {render,screen,cleanup} from '@testing-library/react'
import { Router } from "../Router"
import { beforeEach } from "vitest"
import {getCurrentPath} from '../utils'

vi.mock('../utils.js',()=>({
     getCurrentPath: vi.fn()
}))

describe('Router', ()=>{
     beforeEach(()=>{
          cleanup()
          vi.clearAllMocks()
     })
     it('should render withou problems',()=>{
          render(<Router routes={[]}/>)
          expect(true).toBeTruthy()
     }),
     it('should render 404 if no routes match',()=>{
          render(<Router routes={[]} defaultComponent={()=><h1>404</h1>}/>)
          expect(screen.getByText('404')).toBeTruthy()
     }),
     it('should render the component of the first route that match',()=>{
          getCurrentPath.mockReturnValue('/about')
          const routes =[
               {
                    path:'/',
                    Component:()=> <h1>Home</h1>
               },
               {
                    path:'/About',
                    Component:()=> <h1>About</h1>
               }
          ]
          render(<Router routes={routes}/>)
          expect(screen.getByText('About')).toBeTruthy()
     })
})