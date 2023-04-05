import React from 'react'
import '../Order/OrderDetails.css'

function OrderDetails(props) {

  const openOrder=() =>{
    props.openOrderDetails()
}

  return (
    <div>
      <div className="OrderDetails" onClick={openOrder}>
     <div className="textOrderDetails">
    Order Summary
        </div> 
      </div>
    </div>
  )
}

export default OrderDetails
