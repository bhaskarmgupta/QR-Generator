function generateQR() {
    var content = document.getElementById("content").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: content,
        width: 128,
        height: 128
    });
}

function shareQRCode() {
    var qrcodeCanvas = document.querySelector("#qrcode canvas");
    var imageData = qrcodeCanvas.toDataURL("image/png");

    var link = document.createElement('a');
    link.href = imageData;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}