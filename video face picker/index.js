$(document).on("change", ".file_multi_video", function (evt) {
  var $pre = $('#video_here');
  $pre[0].src = URL.createObjectURL(this.files[0]);
  $pre.parent()[0].load();
});

$(document).on("change", ".file_multi_image", function (evt) {
  var $pre = $('#preview');
  $pre[0].src = URL.createObjectURL(this.files[0]);
  $pre.parent()[0].load();
});

document.getElementById('submit').addEventListener('click', function () {
  var files = document.getElementById('input').files;
  if (files.length > 0) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    var text;

    reader.onload = function () {
      text = reader.result;

      fetch('http://localhost:5000/recognize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          video: text,
          title: document.getElementById("title").innerHTML,
          location: document.getElementById("location").innerHTML

        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
          };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
});
