import {add,sub, mul,div} from './Calculate'
import React from 'react'
import './index.css'

function App(){
return (

    <>

<div className='div-style'>

<ol>
<li>The sum of two number is {add(5,5)}</li>

<li>The sub of two number is {sub(10,5)}</li>
<li>The Multipication of two number is {mul(5,5)}</li>

<li>The Division of two number is {div(100000,52888)}</li>



</ol>
</div>


</>


)

}
    


export default App