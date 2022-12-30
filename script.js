let LInput = document.getElementById('kitchen-input') ;
let LBtn = document.getElementById('add-btn') ;
let LList = document.getElementById('k-i-list');
let delBtn = document.getElementById('del-btn') ;

let kitInpData;

let kitInpDataArray =[];
//step 2

function setLocalStorage(){
    localStorage.setItem('kitchenInputData', JSON.stringify(kitInpDataArray));
}

function getLocalStorage(){
    
    if( localStorage.getItem('kitchenInputData')) {//ivide local storagl valla valu undo ennu check cheyunu
        kitInpDataArray = JSON.parse(localStorage.getItem('kitchenInputData'))
        console.log(kitInpDataArray);
        buildUi()
       // console.log('data found');
    }else{
    //console.log('data not found');
    }
}

function buildUi(){
     //Creat dom element now
     LList.textContent= '';
     kitInpDataArray.forEach((item) =>{//ivide value ne array formatil ninnu mati onu onakki
        let li = document.createElement('li')
        let spanElement = document.createElement('span');
        li.appendChild(spanElement)
        spanElement.innerText = item;
    
        LList.appendChild(li)
    
        LInput.value ='';
        LInput.focus()
        
        console.log(li);
    
        //Creat trash button
    
        let trashBtn = document.createElement('i')//ivide oru i element undaki
        trashBtn.classList.add('fa-solid','fa-trash')//a i element nu class nalki
        li.appendChild(trashBtn)
       // console.log(trashBtn);
    
    
    
        //creat a edit button
        let editBtn = document.createElement('i');
        editBtn.classList.add('fa-solid',"fa-pen" )
        li.appendChild(editBtn)
     } )
     // li = document.createElement('li')
     //let spanElement = document.createElement('span');
     //li.appendChild(spanElement)
    
}

function addKitchenItems(){
    kitInpData = LInput.value;//itu global akki
    kitInpDataArray.push(kitInpData)//kitInpDataArray ithil kitcheninput data yile value vechu
    console.log(kitInpDataArray);
     //set to local storage
     setLocalStorage()
     //get data to local storage
     getLocalStorage()


   
}


function kitchenItemDelet(even){
    console.log(even.target.classList[0]);//ivide allathe click cheyumbol log even consolinl oru object varum athil targetl classlist l class fa-sold kanikku nengil delet
    if(even.target.classList[1] == 'fa-trash'){
        let item = even.target.parentElement;//ivide target or click cheytha element te parant kittan output=  <i class="fa-solid fa-trash">…</i>
        item.classList.add('slideOut');

        item.addEventListener('transitionend', function(){
            item.remove()//ithu item remove cheyan
        })
    }else{
    }
}

function keyboard(event){
    if(event.keyCode == 13){
        addKitchenItems()
    }else{

    }
}

function keyboard(event){
   // console.log(event);
    if(event.code == 'Enter'){
        addKitchenItems()
    }else{

    }
}
//<i class="fa-solid fa-trash"></i>
//step 1

function editKitchenitem(even){
console.log(even.target.classList);

if(even.target.classList[1]== 'fa-pen'){
    let editValue = prompt('place add new value')//oru puthiya value kodukan upayogikunu
    console.log(editValue);
    let item =  even.target.parentElement;//ivide li a eduthu
    let spanElement = item.querySelector('span')//li ninum span eduthu
    console.log(spanElement)
    spanElement.innerText = editValue
}
}

function allDelete(){
    localStorage.clear()
    location.reload()
}



LBtn.addEventListener('click',addKitchenItems);
LList.addEventListener('click' ,kitchenItemDelet)
LList.addEventListener('click', editKitchenitem);
delBtn.addEventListener('click',allDelete)
document.addEventListener('keypress',keyboard)

getLocalStorage()