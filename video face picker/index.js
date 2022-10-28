$(document).on("change", ".file_multi_video", function (evt) {
  var $pre = $('#video_here');
  $pre[0].src = URL.createObjectURL(this.files[0]);
  $pre.parent()[0].load();
});

var text;
document.getElementById('button').addEventListener('click', function () { var files = document.getElementById('file').files; if (files.length > 0) { getBase64(files[0]); } }); var text; function getBase64(file) {
  var reader = new FileReader(); reader.readAsDataURL(file); reader.onload = function () {
    text = reader.result;

  };
  reader.onerror = function (error) { console.log('Error: ', error); };
} 