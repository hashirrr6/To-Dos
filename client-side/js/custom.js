let taskCounter=1;

function add() {
    let task=document.getElementById("task").value;

    if (task.trim() === "") {
        
        alert("Please enter a task!");
        return; 
    }
    console.log(task);

    let taskContainer = document.createElement('div');
    taskContainer.style.display = 'flex';
    taskContainer.style.alignItems = 'center'; 
    taskContainer.style.marginBottom = '10px'; 

   let addtask=document.createElement('input')
   addtask.type='text';
   addtask.style.padding = "5px";
   addtask.style.borderRadius = "5px";
   addtask.style.backgroundColor="aquamarine"
    addtask.disabled=true;
   addtask.value=task

     tick=document.createElement('input')
    tick.type='checkbox';
    tick.style.width='30px';
    tick.style.height='30px';
    // tick.style.padding = "5px";
    

    let dlt=document.createElement('button');
    dlt.textContent=`Delete`
    dlt.style.width='60px';
    dlt.style.height='25px';
    dlt.style.backgroundColor="red"
    dlt.style.margin='0px 10px'

    let edit=document.createElement('button')
    edit.textContent='Edit';
    edit.style.width='60px';
    edit.style.height='25px';
    edit.style.backgroundColor="#819fd4";


  let save=document.createElement('button')
  save.textContent="Save"
    save.style.width='60px';
    save.style.height='25px';
    save.style.display='none';
    save.style.backgroundColor="#09de37";
    save.style.margin='0px 10px'



   let taskNo=document.createElement('span')
    taskNo.textContent=taskCounter + "."   
   taskNo.style.marginRight="14px"



   
    

    taskContainer.appendChild(taskNo);
    taskContainer.appendChild(tick)
    taskContainer.appendChild(addtask)
    taskContainer.appendChild(dlt)
    taskContainer.appendChild(edit)
    taskContainer.appendChild(save)


    document.getElementById("display").appendChild(taskContainer)
    


    taskCounter++

    document.getElementById("task").value='';

    dlt.addEventListener('click',function(){
        taskContainer.remove();
    })
    edit.addEventListener('click',function(){
        
        addtask.disabled=false;
        edit.style.display="none"
        save.style.display="inline-block"


    })
    save.addEventListener('click',function (){
        addtask.disabled=true;
        save.style.display="none"
        edit.style.display="inline-block"

    })
    tick.addEventListener('change',function(){
        if(this.checked){
        addtask.style.textDecoration="line-through"
    }else{
        addtask.style.textDecoration="none"
    }
    })
    

}
