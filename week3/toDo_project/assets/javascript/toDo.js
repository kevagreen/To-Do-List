
    //list
    let list = document.getElementsByClassName('.items');
    console.log(list);
          
    // Get form/form id #addToForm
    let form = document.querySelector('#addToForm');
    //add event click
    form.addEventListener('click', addEvent);
    //function add item
    function addEvent(e){
        e.preventDefault();
        
        //get value of input
    let newItem = document.getElementById('newToDo').value;
    
     //create new li element
    let li = document.createElement('li');

    //add class name
    li.className = 'items';
    
    
    //add text node with input
    li.appendChild(document.createTextNode(newItem));
  
   
  //append to parent
 list.appendChild(li);
  

    }
    
    





