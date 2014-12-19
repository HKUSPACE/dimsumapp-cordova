$(document).ready(function(e){
	$("#loadBtn").click(function(e){
		$.getJSON('http://10.0.2.2/dimsumapp/dimsums/index.json', function(data){
			console.log(data);
			var dimsums = data.dimsums;
			var types = data.types;

			$.each(dimsums, function(i, dimsum){
				console.log(dimsum);
				$(".table tbody").append('<tr>'
					+'	<td>'+dimsum.Dimsum.id+'</td>'
					+'	<td>'+dimsum.Dimsum.name+'</td>'
					+'	<td>'+dimsum.Dimsum.stock+'</td>'
					+'	<td>'+types[dimsum.Dimsum.type_id]+'</td>'			
					+'<tr>');
			});
		});
	
	});
	
	function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    function uploadPhoto() {

        //selected photo URI is in the src attribute (we set this on getPhoto)
        var imageURI = document.getElementById('smallImage').getAttribute("src");
        if (!imageURI) {
            alert('Please select an image first.');
            return;
        }

        //set upload options
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType = "image/jpeg";

        options.params = {
            data.Dimsum.name: document.getElementById("name").value,
            data.Dimsum.stock: document.getElementById("stock").value,
            data.Dimsum.type_id: document.getElementById("typeId").value
        }

        var ft = new FileTransfer();
        ft.upload(imageURI, encodeURI("http://10.0.2.2/dimsumapp/dimsums/index.json"), win, fail, options);
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      console.log('Failed because: ' + message);
    }

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        //alert("Response =" + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

 
	//
});