const Logger=require('./Logger');
const EventEmitter=require('events');
const logger=new Logger();

// listening the event 'messageLogged'
logger.on('messageLogged',(arg)=>{
    console.log("Event Listend",arg);
})

logger.log("Hello I'm inside the log")

 



