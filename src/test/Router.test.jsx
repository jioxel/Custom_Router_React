import {describe,expect,it} from "vitest"
import {render} from '@testing-library/react'
import { Router } from "../Router"

describe('Router', ()=>{
     it('should render withou problems',()=>{
          render(<Router routes={[]}/>)
          expect(true).toBeTruthy()
     })
})