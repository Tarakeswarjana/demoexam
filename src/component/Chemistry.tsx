import React from 'react'
import { Link }  from "react-router-dom"
function Chemistry() {
  return (
    <div>Chemistry
        <Link to={"/physics"}>
        <p>phy</p>
        </Link>
    </div>
  )
}

export default Chemistry