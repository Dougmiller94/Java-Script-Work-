// console.log("Hello World");

// function printHello() { 
//     console.log("God Damn Snakes");
// }

// printHello();

// // function printy(texty) {
// //     console.log(texty + 10);
// }

// let printy = function(text) {
//     console.log(text + 10);
// }

// let shot = function(texty) {
//     console.log(texty);
// }

// printy("hi ")
// printy(3400/10*2 );

// printy(shot);

// printy(10*2, 45);

// shot("bitch " + 10);

// let dogs = () => {
//     let name = "baba fetch";
//     let printy = () => {
//         console.log(name);
//     }
//     printy();
// }
// console.log(name);


// dogs();


// let person = {
//     "name": "Darth maul",
//     "lightSaber": function(foe) {
//         console.log(foe + " jedi killed")
//         return "order 66";
//     }
// }

// console.log(person);
// console.log(person.lightSaber("Obi-wan"));


// let jedis =["Count Duku", 42, "Baby Yoda"];

// console.log(jedis[0]);

// console.log(jedis[2]);

// console.log(jedis[1]);

let image = document.createElement("img");
let imageId = "restarting";
image.src = "https://media3.giphy.com/media/HRLzyyMBEQyWI/giphy.gif?cid=790b7611c024fa0a264db7068e156d4eefbf987317646371&rid=giphy.gif";
image.alt = "image moving";
image.style.position = "absolute";
image.style.bottom = "0px";
image.style.left = "300px";
image.style.width = "20%";
let body = document.body; 
body.append(image);
body.addEventListener("mousemove", (e)=> {
image.style.left=(e.clientX+10) +"px";
image.style.top=(e.clientY+10) +"px";
})



let postData = (event) => {
    event.preventDefault();
    console.log(event.target);
    let form = event.target;
    let obj = {}
    for (let input of form) {
        if(input.name) {
            obj[input.name] = input.value
        }
    }
        console.log(obj);
    

        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:8081/note/");
        request.setRequestHeader("Content-Type", "application/json")
        let body = JSON.stringify(obj);
        console.log(body);
        request.send(body);
        request.onload = () => {
            getData();
        }
    

}

let getData = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8081/note/");
    request.send();
    request.onload = () => {
        let data = JSON.parse(request.response);
        let list = document.getElementById("tasks");
        list.innerText = "";
        for(let task of data) {
            let listItem = document.createElement("li");
            let div = document.createElement("div");
            let para = document.createElement("p");
            para.innerText = task.text;
            let button = document.createElement("button");
            button.className = "btn btn-danger";
            button.innerText = "Delete";
            button.addEventListener("click", () => {
                deleteData(task.id);
            });
            let updateButton = document.createElement("button");
            updateButton.className = "btn btn-success";
            updateButton.innerText = "Update"
            updateButton.addEventListener("click", () => {
            updateData(task);
            });
            div.appendChild(para);
            div.appendChild(updateButton);
            div.appendChild(button);
            listItem.appendChild(div);
            list.appendChild(listItem);
        }
    }
}
// let postData = (event) => {
//     event.preventDefault();
//     let form = event.target;
//     let obj = {};
//     let inputs = form.getElementsByTagName("input");
//     for (let input of inputs) {
//         if (input.name) {
//             obj[input.name] = input.task;




// let updatedData = (id) => {
//     console.log(id);
//     let request = new XMLHttpRequest();
//     request.open("PUT", "http://localhost:8081/note/"+id);
//     request.send();
//     request.onload = () => {
//     getData ();
// }
  
let deleteData = (id) => {
    console.log(id);
    let request = new XMLHttpRequest();
    request.open("DELETE", "http://localhost:8081/note/"+id);
    request.send();
    request.onload = () => {
    getData ();
    } 
}
getData();




let id = 0;
let updateData = (task) => {
    console.log(task);
    
    // change input value to match task.text
    // set global id to be task.id
}

// let requestHandler = (method, url, callback) => {

// let request = new XMLHttpRequest();
// request.open("GET", "http://localhost:8081/note/");
// request.send();
// request.onload = onload = () => {
// //     callback(JSON.parse(request.response));
// // // };
// // }
// let display = (data) => {
//     console.log(data);
// }
// requestHandler("GET", "http://localhost:8081/note/", display)

let requestHandler = (method, url) => { 
    return new Promise((resolve, reject)=> {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.send();
        request.onload = () => { 
            if(request.status >=200 && request.status<300) {
                resolve(request);
            }
            else {
                reject("status was " + request.status);
            }
        }
    });
}
//using .then & .catch
// let display = (request) => {
//     console.log(request.response);
// }
// requestHandler("GET", "http://localhost:8081/note/")
// .then((request) => {
//     console.log(request.response);
// }) .catch ((error) => {
//     console.log(error);
// })

//using Asynac/await - blocking technique
// async function hello() { 
//     let request = await requestHandler("GET", "http://localhost:8081/note/");
//     console.log(request.response);
// }
// hello();






// let getData = () => {
//     let request = new XMLHttpRequest();
//     request.open("GET", "http://localhost:8081/note/");
//     request.send(); 
        
    
//     request.onload = () => {
//         let data = JSON.parse(request.response);
//         let list = document.getElementById("tasks")
//         for(let value of data) {
//             let listItem = document.createElement("li");
//             listItem.innerText = value.text;
//             list.appendChild(listItem);

//             let div = document.createElement("div");
//             let para = document.createElement("p");
//             para.innerText = value.text;
//             let button = document.createElement("button");
//             button.className = document.createElement

//         }
//         // console.log(request.response);
//     }
//   }
// getData();




// let person2 = {
//     "name" : "Mace Window"
// }

// person2.lightsaber = "purple"
// person2.name = "han solo"

// console.log(person2);


// let cats = document.createElement("div");
// cats.id = "cats"
// console.log(cats);
// let catlist = cats.getElementById("cats");





// function listCreator() {
//     let listy = document.createElement("div");
//     listy.id = "chrisy";
//     let head = document.createElement("h1");
//     head.className = "headers";
//     head.innerText = "Jedis";
//     let lists = document.createElement("ul");
//     for (let i = 0; i < 10; i++) {
//         let listItem = document.createElement("li");
//         listItem.innerText = "Jedi = ... " + (i+1);
//         lists.append(listItem);
//     }
//     listy.append(head);
//     listy.append(lists);
//     document.body.append(listy);
//     // console.log(thingList);`
// }
// listCreator();


// let body = document.body; 
// addEventListener("mousemove", (e) => {
    // console.log("x:" + e.clientX);
    // console.log("Y:" + e.clientY);
// });

// fetch("http://localhost:8081/note/")
// .then(request => request.json())
// .then(request => console.log(request))

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
bark() {
    console.log("woofwoof");
}
}
let dog = new Dog("bob", 10);
dog.bark();







let button = document.getElementsByName("STOP VIRUS");
button.length = "150%";

function zoomin(){
    var image = document.getElementById("restarting");
    var currWidth = image.clientWidth;
    if(currWidth == 500){
        alert("Maximum zoom-in level reached.");
    } else{
        myImg.style.width = (currWidth + 500) + "3000px";
    } 
}
function zoomout(){
    var image = document.getElementById("restarting");
    var currWidth = image.clientWidth;
    if(currWidth == 500){
        alert("Maximum zoom-out level reached.");
    } else{
        image.style.width = (currWidth - 500) + "3000px";
    }
}









let updateBackend = (event) => {
    event.preventDefault();
    console.log(event.target);

}