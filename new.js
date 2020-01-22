const fileReader = new FileReader();

fileReader.onload = function (e) {
     $('#svg-img').attr('href', e.target.result);
}

$("#img").change(function () {
     document.getElementById('label-file-name').innerHTML = this.files[0].name;
     if (this.files && this.files[0]) fileReader.readAsDataURL(this.files[0]);
});

$("#name").change(function () {
     const name = document.getElementById('name').value;
     document.getElementById('svg-name').innerHTML = name;
});

$("#generateBanner").click(function () {
     const svg = document.getElementById('svg');
     var canvas = document.getElementById('canvas');
     canvas.width = 1024;
     canvas.height = 1024;

     const data = new XMLSerializer().serializeToString(svg);
     const blob = new Blob([data], { type: 'image/svg+xml' });
     const win = window.URL || window.webkitURL;
     const url = win.createObjectURL(blob);
     
     var imageElement = new Image();
     imageElement.src = url;
     imageElement.onload = function () {
          canvas.getContext('2d').drawImage(imageElement, 0, 0);
          win.revokeObjectURL(url);

          const dataURL = canvas.toDataURL('image/png').replace('image/png', 'octet/stream');
          const fileName ="Banner.png";

          const downloadButton = document.getElementById('download-banner')
          downloadButton.setAttribute('href', dataURL)
          downloadButton.setAttribute('download', fileName)

          win.revokeObjectURL(dataURL);
     };
     
     showDownloadModal()
});

function closeDownloadModal() {
     document.getElementById('download-modal').style.display = "none";
}

function showDownloadModal() {
     document.getElementById('download-modal').style.display = "flex";
}