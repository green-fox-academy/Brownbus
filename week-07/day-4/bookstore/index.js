let button =document.querySelector('button')
let table = document.createElement('table')
let body = document.querySelector('body')

let counter = 0;

button.onclick = ()=>{
  counter ++
  if(counter === 1){
  $.get('/show_author',(data) => {
    console.log(data);
    let tr_main = document.createElement('tr');
    let th8 = document.createElement('th')
    let th7 = document.createElement('th')
    let th6 = document.createElement('th')
    let th5 = document.createElement('th')

      th8.innerHTML = 'ID'
      th7.innerHTML =  'Name'
      th6.innerHTML = 'country'
      th5.innerHTML = 'Home city'

      table.appendChild(tr_main)

    for(let i = 0; i < data.length; i++){
      let tr = document.createElement('tr')
      let th1 = document.createElement('th')
      let th2 = document.createElement('th')
      let th3 = document.createElement('th')
      let th4 = document.createElement('th')
      th1.innerHTML = data[i].aut_id
      th2.innerHTML = data[i].aut_name
      th3.innerHTML = data[i].country
      th4.innerHTML = data[i].home_city
      tr.appendChild(th1)
      tr.appendChild(th2)
      tr.appendChild(th3)
      tr.appendChild(th4)      
      table.appendChild(tr)
    }
    body.appendChild(table)
  });
}else if(counter === 2){
  $.get('/category',(data) => {
    console.log(data);
    body.removeChild(document.querySelector('table'))
    let table = document.createElement('table')
    let tr_main = document.createElement('tr');
    let th8 = document.createElement('th')
    let th7 = document.createElement('th')

      th8.innerHTML = 'Category ID'
      th7.innerHTML =  'Category Name'
    

      table.appendChild(tr_main)

    for(let i = 0; i < data.length; i++){
      let tr = document.createElement('tr')
      let th1 = document.createElement('th')
      let th2 = document.createElement('th')
      th2.innerHTML = data[i].cate_id
      th1.innerHTML = data[i].cate_descrip
      tr.appendChild(th1)
      tr.appendChild(th2)    
      table.appendChild(tr)
    }
    body.appendChild(table)
});
}else if(counter == 3){
  $.get('/publisher',(data) => {
    console.log(data);
    body.removeChild(document.querySelector('table'))
    let table = document.createElement('table')
    let tr_main = document.createElement('tr');
    let th6 = document.createElement('th')
    let th7 = document.createElement('th')
    let th8 = document.createElement('th')
    let th9 = document.createElement('th')
    let th10 = document.createElement('th')

      th6.innerHTML = 'publisher ID'
      th7.innerHTML =  'publisher Name'
      th8.innerHTML = 'Publishing city'
      th9.innerHTML =  'country'
      th10.innerHTML = 'office'
    
    

      table.appendChild(tr_main)

    for(let i = 0; i < data.length; i++){
      let tr = document.createElement('tr')
      let th1 = document.createElement('th')
      let th2 = document.createElement('th')
      let th3 = document.createElement('th')
      let th4 = document.createElement('th')
      let th5 = document.createElement('th')
      
      th1.innerHTML = data[i].pub_id
      th2.innerHTML = data[i].pub_name
      th3.innerHTML = data[i].pub_city
      th4.innerHTML = data[i].country
      th5.innerHTML = data[i].country_office
      
      tr.appendChild(th1)
      tr.appendChild(th2)    
      tr.appendChild(th3)
      tr.appendChild(th4)    
      tr.appendChild(th5)
  
      
      
      table.appendChild(tr)
    }
    body.appendChild(table)
})
}else{counter = 0};
}