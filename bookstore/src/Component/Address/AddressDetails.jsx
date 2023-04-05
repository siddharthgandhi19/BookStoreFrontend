import React from 'react'
import '../Address/AddressDetails.css'
function AddressDetails(props) {

  const openDetails = () => {
    props.openAddressDetails()
    
}

  return (
    <div>
      <div className="AddressDetails"  onClick={openDetails}>
     <div className="textAddressDetails">
     Address Details
        </div> 
      </div>
    </div>
  )
}

export default AddressDetails
