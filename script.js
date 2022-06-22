var res = fetch("https://anapioficeandfire.com/api/books");
console.log(res)
res.then((data)=>data.json()).then((value)=>{
    console.log(value);
  
    for(var i=0;i<value.length;i++){

        console.log(value[i].name);

        var ele = document.createElement("div");

        ele.innerHTML=`book url:${value[i].url} book name:${value[i].name}  book isbn:${value[i].isbn}
        
        book number of page : ${value[i].numberOfPages } book authors:${value[i].authors}
        
    book publisher:${value[i].publisher} bookreleaseddate:${value[i].released}
    
    
    book characters:${value[i].characters}           `;

        document.body.append(ele)
    }






});