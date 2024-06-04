import React from 'react'

const dispe = (props) => {
  return (<>

  <div>{props.count}</div> <br /> <br />
       <div>
       <button onClick={props.incNum}>Inc</button>
        <button onClick={props.decNum}>Dec</button>
       </div>

  </>
  )
}

export default dispe