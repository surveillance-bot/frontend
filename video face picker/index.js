$(document).on("change", ".file_multi_video", function(evt) {
    var $pre = $('#video_here');
    $pre[0].src = URL.createObjectURL(this.files[0]);
    $pre.parent()[0].load();
  });