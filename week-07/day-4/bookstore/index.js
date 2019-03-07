let button =document.querySelector('button')
let table = document.createElement('table')
let body = document.querySelector('body')
button.onclick = ()=>{
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

}