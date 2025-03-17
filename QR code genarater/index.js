const qrText = document.getElementById("qr-text");
        const sizes = document.getElementById("sizes");
        const generateBtn = document.getElementById("generate-btn");
        const downloadBtn = document.getElementById("download-btn");
        const qrContainer = document.getElementById("qr-body");
        
        // Clear the QR code container
        function clearQR() {
            qrContainer.innerHTML = "";
            downloadBtn.style.display = "none";
        }
        
        // Generate QR code
        function generateQRCode() {
            if(!qrText.value) {
                alert("Please enter a URL or text to generate QR code");
                return;
            }
            
            // Clear previous QR code
            clearQR();
            
            // Create new QR code
            const qrCode = new QRCode(qrContainer, {
                text: qrText.value,
                width: parseInt(sizes.value),
                height: parseInt(sizes.value),
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            
            // Show download button
            downloadBtn.style.display = "block";
        }
        
        // Download QR code as image
        function downloadQRCode() {
            if(!qrContainer.querySelector("img")) {
                alert("Generate a QR code first!");
                return;
            }
            
            // Get the image from the QR code
            const imgSrc = qrContainer.querySelector("img").src;
            
            // Create a temporary link to download the image
            const downloadLink = document.createElement("a");
            downloadLink.href = imgSrc;
            downloadLink.download = `qrcode-${Date.now()}.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
        
        // Event listeners
        generateBtn.addEventListener("click", function(e) {
            e.preventDefault();
            generateQRCode();
        });
        
        downloadBtn.addEventListener("click", function(e) {
            e.preventDefault();
            downloadQRCode();
        });
        
        // Clear QR code when input changes
        qrText.addEventListener("input", clearQR);
        sizes.addEventListener("change", clearQR);