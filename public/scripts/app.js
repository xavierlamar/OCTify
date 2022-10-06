var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dtszkvxdq/image/upload'
var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');
var image = document.getElementById('image');
var iframe = document.getElementById('iframe');

fileUpload.addEventListener('change',function(event){

    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file',file)
    formData.append("upload_preset","upload")

   var uploadRes = axios({
        url:CLOUDINARY_URL,
        method:'POST',
        Headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        data:formData

    }).then(function(res){
        console.log(res.data.url);
        imgPreview.src = res.data.url;
        image.value = res.data.url;
        iframe.src = res.data.url;
    }).catch(function(err){
        console.log(err);
    })

})