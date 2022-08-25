import React from 'react'
// import { UserContext } from '../App'
import { User2 } from './Context'

const Context2 = () => {
  return (
    <div>
      {/* <UserContext.Consumer>
         {value => { return (<div>{value}</div>)}}
      </UserContext.Consumer> */}
       <User2.Consumer>
        {value => {return(
            <div>
               {value}
            </div>
        ) }}
       </User2.Consumer>
    </div>
  )
}

export default Context2