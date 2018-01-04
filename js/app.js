$(document).ready(function(){
  var booksCollection = [];

  // pobranie danych z endpoint/books
  $.ajax({
    url: "http://localhost:8282/books/"
  }).done(function(books){ // done jest odpalony kiedy url sie odpali
  //  console.log(books);
  booksCollection = books;
  addBooksToHTML(booksCollection)
  // books to sa nasze ksiazki z url
  })

  function addBooksToHTML(books){
    var table = $("#table")


    books.forEach(function(book){
      var row = $('<div class="row">');
      row.append($(' <div class="col-sm">' + book.title+ '</div>'));
        row.append($(' <div class="col-sm">' + book.author+ '</div>'));
          row.append($(' <div class="col-sm">' + book.isbn+ '</div>'));
            row.append($(' <div class="col-sm">' + book.type+ '</div>'));
      table.append(row);
      })
    }
    var button = document.querySelector("button")

    button.addEventListener("click", function(e){
      e.preventDefault(); // zeby str sie nie przeladowywala
      var formTitle = $("#title").val();;

      var formAutor = $("#author").val();
      var formISBN = $("#isbn").val();
      var formDesc = $("#description").val();
      var formPublish = $("#publisher").val();
      var id = booksCollection[booksCollection.length-1].id+1;
      // console.log(id);

      var objToSend = {
        id : id
        title : formTitle,
        author: formAutor,
        isbn : formISBN,
        type : formDesc,
        publisher : formPublish
      }

      console.log(formDesc, formISBN, formAutor, formTitle, formPublish);
    //    $.ajax({
    //     url: "http://localhost:8282/books/add", type:POST,
    //       data: JSON.stringify(objToSend);
    // }).done(function(books){
    // booksCollection = books;
    //  addBooksToHTML(booksCollection)
    //  })
 })


 var myHeaders = new Headers({
'content-type':'application/JSON'
});
var myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
             body:JSON.stringify(objToSend) };

fetch('http://localhost:8282/books/add', myInit).then(function(response) {
console.log(response);
})

})

//console.log(books);
    // zosatnie wykonana tylko w tedy kiedy przyjda ksiazki z onpoint
    // ta funkcja je pobierzemy i zparsujemy na String(chyba)
  //}
  //console.log(booksCollection); // na razi jest pusty bo kod sie nie zdazyl wykonac
