import React from 'react'


class Counter extends React.Component {
    render(){
        const {value , onIncrease , onDecrease} = this.props
        return(
            <div>
                    
                        <div class="container">
                        
                          <h2>Count:{value}</h2>
                          <p><span>&#128077;</span><button onClick={onIncrease}>like</button></p> 
                        
                          
                          <p><span>&#128078;</span><button onClick={onDecrease}>dislike</button></p>
                         </div>
                
              
            </div>
        
            
        )
    }
}

export default Counter;