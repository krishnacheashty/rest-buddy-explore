const randomUser=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>userField(data))
}
randomUser();

const userField=data=>{
    console.log(data.results);
     const buddy=data.results;
     const buddiesDiv=document.getElementById('buddy-container');

     for(const element of buddy){
        //  console.log(element)
        const div=document.createElement('div');
        div.classList.add('col-md-4')
        div.classList.add('mt-5')
        div.innerHTML= `
        
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">name:${element.name.title} ${element.name.first} ${element.name.last} 
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">gender:${element.gender} phone:${element.cell}
                </h6>
                <p class="card-text">email:${element.email}</p>
                <p class="card-text">location:street${element.location.street.number} 
                road-name:${element.location.street.name} 
                city:${element.location.city} state:${element.location.state}</p>
                  
                <a href="#" class="btn btn-primary">For picture</a>
            </div>        
        </div>    
        `

        buddiesDiv.appendChild(div)

     } 
}
