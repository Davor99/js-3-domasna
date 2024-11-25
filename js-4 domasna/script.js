fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(response => response.json()) 
       
    
    .then(data => {
        console.log("Odgovor:", data);
    })
    .catch(error => {
        console.error("Greska:", error);
    });