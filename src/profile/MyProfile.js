import React from 'react'
import PropTypes from 'prop-types'

function MyProfile(props) {
  console.log(props);
   
  return (
    <div>
        <h1>{props.fullName}</h1>
        <h2>{props.info.profession}</h2>
        <h2>{props.info.bio}</h2>
        <button onClick={() => {props.handleName()}}>
     ClickMe
   </button>
    </div>
  )
}

// Default props

MyProfile.defaultProps ={
  fullName : 'Jhon Doe' ,
  profession : 'Jobless ' ,
  bio : 'I don"t like bio"s '

}
 // property type 
 MyProfile.propTypes = {
  fullName : PropTypes.string ,
  profession : PropTypes.string ,
  bio : PropTypes.string ,
    
 }


export default MyProfile 