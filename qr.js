function generateQRCode() {
    const data = document.getElementById("data").value;
    const url = `https://qrcode-generator-murex.vercel.app/generate_qr/?data=${encodeURIComponent(data)}`;
    document.getElementById("qrcode").src = url;
}