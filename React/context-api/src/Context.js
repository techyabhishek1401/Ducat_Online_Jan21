import React,{Component, createContext} from 'react'

export const SimpleContext=createContext({});
// --------------------------------------------
const {Provider,Consumer}=createContext();

class ThemeContextProvider extends Component {
    state={
        theme:"Day"
    };

 toggleTheme=()=>{
    this.setState((previousState)=>{ return {
        theme:previousState.theme==="Day"?"Night":"Day"
    }})
 }
 render (){
     return (
         <Provider value={{theme:this.state.theme,toggleTheme:this.toggleTheme}}>
             {this.props.children}
         </Provider>
     )
 }

}

export {ThemeContextProvider,Consumer as ThemeContextConsumer}

/**
 
<Compommet1>
          <h1>Hello</h1>
</Compommet1>
 */