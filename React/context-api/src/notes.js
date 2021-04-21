/**
 
<Context.Provider value={name:"Abhishek"}>
    <Component />  // which have access to all the context provided by the PROVIDER
    <Component />
      <Component >
       <Context.Consumer>
           Actions to access the context
      </Context.Consumer>
         <Component />
      </Component >
     
</Context.Provider>
 *  */ 