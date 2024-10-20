
let input= prompt("what would you like to do");

const todos=['complete Homework','taking medicine'];

while(input!=='quit' && input!=='q'){

    if(input ==='list'){
        console.log('*******************');

        for(let i=0;i < todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******************');
    }
    else if(input==='new'){
        const new_todo=prompt("Ok,what is new todo");
        todos.push(new_todo);
        console.log(`${new_todo} added to the list`);
    }

    else if(input==='delete'){

        const index=parseInt(prompt("Okay ,Which index you want to delete"));
        if(!Number.isNaN(index)){

            const deleted= todos.splice(index,1);
            console.log(`Ok, deleted ${deleted[0]}`);

        }
        else{
        console.log("Unknown index");
    }

    }

     input=prompt("what would you like to do");
}
console.log("Ok quit the App!");