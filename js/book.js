function createBookData(){
    alert()
    let title = document.getElementById('title').value;
    let writer= document.getElementById('writer').value;
    let publisher = document.getElementById('publisher').value;
    let isbn = document.getElementById('isbn').value;
    let subject = document.getElementById('subject').value;
    let numpages= document.getElementById('numpages').value;
    let obj = {
        title : title,
        writer : writer,
        publisher: publisher,
        isbn: isbn,
        subject: subject,
        numpages: numpages
    
    }

    console.log (obj)

    
    
}

