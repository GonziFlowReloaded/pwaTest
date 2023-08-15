const videoElement = document.getElementById('videoElement');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia({video: true})
.then(function(stream){
    videoElement.srcObjec = stream;
})
.catch(function(error){
    console.error('ocurrio un error:', error);
}));