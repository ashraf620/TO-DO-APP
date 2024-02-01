
let todolist=[
   {
   item:'Buy milk',
   date:'5/11/2023'
},

{
   item:'Buy milk',
   date:'6/10/2023'
}
];
localStorage.setItem('todolist',JSON.stringify(todolist));


displayItems();

function addtodo()
{
   let inputelement=document.querySelector('#todomsg');

   let date=document.querySelector('#tododate');
   let dateelement=date.value;

   let todoItem = inputelement.value;

   todolist.push({item:todoItem,date:dateelement});

   inputelement.value='';
   date.value='';
   displayItems();
}
function displayItems()
{
   let containerElement=document.querySelector('.todocontainer');

   let html='';
   for(let i=0;i<todolist.length;i++)
   {
      // let Item= todolist[i].item;
      // let date=todolist[i].date;
      // object destructring
      let {item,date}=todolist[i];
      html+=`
      

         <span>${item}</span> <span>${date}</span>  <button class='btn-del' onclick='todolist.splice(${i},1);displayItems();'>Delete</button>
      
      `;
   
   }
   containerElement.innerHTML=html;

 
}

