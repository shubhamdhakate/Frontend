import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [ data, setData ] = useState({show:false})

  const toggle = () =>{
    data.show ? setData({show:false}) : setData({show:true})
  }
 
  return (
      <div className='nav'>
        
           <div className='desktop__nav'>
          <ul>
              <li><Link  to ="/">Home</Link></li>
              <li><Link  to="/bollywood" >Bollywood</Link></li>
              <li><Link  to="/technology">Technology</Link></li>
              <li><Link  to="/hollywood">Hollywood</Link></li>
              <li><Link  to="/fitness">Fitness</Link></li>
              <li><Link  to="/food">Food</Link></li>
          </ul>
      </div>   
        
       <div className='mobile__nav'>
       {
          data.show &&   <div className='nav'>
          <ul>
              <li><Link  to ="/">Home</Link></li>
              <li><Link  to="/bollywood" >Bollywood</Link></li>
              <li><Link  to="/technology">Technology</Link></li>
              <li><Link  to="/hollywood">Hollywood</Link></li>
              <li><Link  to="/fitness">Fitness</Link></li>
              <li><Link  to="/food">Food</Link></li>
          </ul>
      </div> 
        }
       <button className='toogle__button' onClick={()=>toggle()}><i className='icon' class="fa-solid fa-2x fa-bars"></i></button>
       </div>
       
    
    </div>
  )
}

export default Nav