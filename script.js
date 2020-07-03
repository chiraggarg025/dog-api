// var list=[];
getBreedImage();
getImagesOfABreed();
$.get('https://dog.ceo/api/breeds/list/all',function(data){
    // console.log(data.message)
    // console.log(data.message[1]);
    for(let breed in data.message){
        // console.log(breed);
        var list =$('#breed');
        list.append('<option>'+breed+'</option>');
    }

    });
    var breed;
    function getBreedImage(){
        // console.log();
        breed = $('#breed').val()
        getImagesOfABreed();
    }
    function getImagesOfABreed(){
        console.log(breed);
        $.get('https://dog.ceo/api/breed/'+breed+'/images/random',function(data){
        var imageUrl= data.message;
        $('#image').attr('src',imageUrl);
        })
        
    }
$('#get-image').click(getBreedImage);
$('#next').click(getImagesOfABreed);
    // console.log(list);
// }
// fillList();

