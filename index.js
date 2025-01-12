// Q Make the filter work

let select = document.querySelector('select')

select.addEventListener('change' , function(){
  let filterVal = select.value

  // console.log(filterVal)

  let allTickets = document.querySelectorAll('.price')

  if(filterVal == 'none'){
    for(let i = 0 ; i < allTickets.length ; i ++ ){
      allTickets[i].parentElement.style.display ='block'
    }
  }

  else{
       for(let i = 0 ; i < allTickets.length; i ++ ){
         if(allTickets[i].getAttribute('data-category') != filterVal){
          allTickets[i].parentElement.style.display ='none'
         }
         else{
          allTickets[i].parentElement.style.display ='block'
         }
       }
  }
})