import React from 'react'
import {ThemeContextConsumer} from './Context';
export default function Button() {
    return (
        <ThemeContextConsumer>
            {(context)=>(
                <button onClick={context.toggleTheme} className="button">
                          Switch <span role="img" aria-label="sun">DAY</span> <br />
                         <span role="img" aria-label="moon">Night</span>
                </button> 
            )}          
        </ThemeContextConsumer>
    )
}
