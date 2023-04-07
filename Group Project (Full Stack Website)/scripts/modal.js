
function fillTitle(id){
    var h1Div = document.getElementById('myModal').children[0].children[0].children[0].children[0];
    var h1Text = id.toUpperCase();

    h1Div.innerText = h1Text

   
}


function findLocation(id){

    if(id)
    document.getElementById('addr').value = id;
    document.getElementById('getAddress').click();
}