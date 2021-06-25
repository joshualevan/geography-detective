  
import React from 'react'

const Witnesses = props => {

    const { current, target, getData } = props;

    return(
       <div className="witness-container">
           {
           getData("witnesses", current)
           .map(witness => {
               return(
                   <div className="witness">
                       <img src={witness.photo} alt={`${witness.name} photo`} />
                       <div>
                        <p>name: {witness.name}</p>
                        <p>age: {witness.age}</p>
                        <p>occupation: {witness.occupation}</p>
                        <p>status: {witness.status}</p>
                       </div>
                   </div>
               )
           })
           }
       </div>
    )
}

export default Witnesses