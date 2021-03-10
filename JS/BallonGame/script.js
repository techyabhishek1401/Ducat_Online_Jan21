// Taking references

let arrow=document.querySelector('.arrow');
let ballons=document.querySelectorAll('.ballon');
let active_ballon,score=0,miss=0;
console.log("ballons:",ballons);
ballons.forEach(ballon=>ballon.addEventListener('click',(e)=>{
  console.log(e.target.offsetTop);
  active_ballon=e.target;
    let active=document.querySelector('.active');
    if(active){
        active.classList.remove('active');
    }
    e.target.classList.add('active');
}))

console.log('arow:',arrow);
// arrow.style.top='50px';
let arrow_top=0,arrow_left=0;
document.addEventListener('keydown',(e)=>{
    console.log(e.keyCode)
    if(e.keyCode===40 && arrow_top<=380){
        arrow_top+=10;
        arrow.style.top=arrow_top+'px' ;    
    }
    else if(e.keyCode===38 && arrow_top >=10){
        arrow_top-=10;
        arrow.style.top=arrow_top+'px' ;  
    }
    else if(e.keyCode===13){
        
      let arrow_interval=  setInterval(()=>{
            
            arrow_left+=10;
            if(arrow_left===600){
                clearInterval(arrow_interval);  
           if(arrow_top>= active_ballon.offsetTop && arrow_top<=active_ballon.offsetTop+50){
                active_ballon.style.display='none';
               document.querySelector('.score').innerText=++score;
           }
           else{
            document.querySelector('.miss').innerText=++miss; 
           }
                setTimeout(()=>{ 
                    arrow_top=0;
                    arrow_left=0;
                    arrow.style.top=arrow_top+'px' ;  
                    arrow.style.left=arrow_left+'px';
                },500)
            }
          else  arrow.style.left=arrow_left+'px';
        },30)
    }
})