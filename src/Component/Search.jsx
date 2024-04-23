import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Search() {
  let [filterData, setFilterData] = useState([])
  let { todo, search } = useSelector((item) => {
    return item.TextReducer
  })
  // console.log(search)
  let dispatch = useDispatch()
  function SearchHandler(e) {

    let findData = todo.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    console.log("this theis testing",findData)
    if(findData.length>0 && (e.target.value)){
      setFilterData(findData)
        dispatch({ type: "SEARCH", payload:filterData })
    }
    else{
      setFilterData([])
      dispatch({ type: "SEARCH", payload:''})
    }
        
  }

  return (
    <div className='container '>
     <div className="row d-flex justify-content-start">
      <div className="col-md-6">
      <input type="text" className='ms-5' placeholder='Search your notes...' onChange={(e) => {
        SearchHandler(e)
      }} />
      {search?<h5> </h5>:<h5 style={{color:"red",marginLeft:"3px"}}>No Data Find*</h5>}
      </div>
      <div className="col-md-6">
        <select name="" id="">
          <option value="">Sort</option>
          <option value="" disabled></option>
          <option value="A-z">A-Z</option>
          <option value="" disabled></option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
     </div>
    </div>
  )
}

export default React.memo(Search)