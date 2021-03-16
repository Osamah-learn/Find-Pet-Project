const menueBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menueBtn.addEventListener('click', ()=>{
    if (!menuOpen){
        menueBtn.classList.add('open');
        document.querySelector('.main-nav').classList.add('open')
        menuOpen=true;
    } else{
        menueBtn.classList.remove('open');
        document.querySelector('.main-nav').classList.remove('open')
        menuOpen = false;
    }
});



///////// Serach resulit 




const animals =[ {
    name : 'cat',
    gendar : "Male",
    age : 1,
    city : 'San Francisco',
    country : 'United States',
    url : 'https://im.mtv.fi/image/5034756/landscape16_9/1024/576/8fa121b7dd57e11f7b6e067b15a1c22/IR/grumpy-cat.jpg'
},

{
    name : 'cat',
    gendar : "Male",
    age : 2,
    city : 'Tampere',
    country : 'Finland',
    url : 'https://im.mtv.fi/image/5034756/landscape16_9/1024/576/8fa121b7dd57e11f7b6e067b15a1c22/IR/grumpy-cat.jpg'
},


{
    name : 'Dog',
    gendar : "Female",
    age : 3,
    city : 'Ghaza',
    country : 'Palestiina',
    url : 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
},
{
    name : 'Dog',
    gendar : "Male",
    age : 3,
    city : 'Ghaza',
    country : 'Palestiina',
    url : 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0'
},


]




let searchResults= document.querySelector(".widgets");

document.getElementById("btn-2").addEventListener("click", renderSearch )

function renderSearch (event) {
    event.preventDefault()
    console.log(111);
    const searchValue = document.querySelector(".form-group input").value.trim();
    const results = searchValue? animals.filter (animal => animal.city.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1):[]
    if(results.length){
        renderOutput(results)
        
    }else{
        searchResults.innerHTML="";
        const div = document.createElement("div");
        div.innerHTML = "No results found"
        searchResults.appendChild(div);
    
    }
}


function renderOutput(animals){
    searchResults.innerHTML="";
    animals.map(animal=>{
        const widget = document.createElement("div");
        widget.className="widget";
        const widget__image =  document.createElement("div")
        widget__image.className="widget__image"
const img = document.createElement("img");
    img.alt="pet image";
    img.src=animal.url;
    const widget__desc = document.createElement("div");
    widget__desc.className="widget__desc";
    const name = document.createElement("h4");
    name.innerHTML = animal.name;
    const gendar = document.createElement("p");
    gendar.innerHTML = animal.gendar
    const city = document.createElement("p");
    city.innerHTML = animal.city;
    widget__desc.appendChild(name);
    widget__desc.appendChild(gendar);
    widget__desc.appendChild(city);
    widget__image.appendChild(img);
    widget.appendChild(widget__image)
    widget.appendChild(widget__desc);
    searchResults.appendChild(widget);

       
      
        
    })
}