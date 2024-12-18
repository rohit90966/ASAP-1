document.addEventListener("DOMContentLoaded", () => {
    const captureButton = document.querySelector(".diagnosis-btn");
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
  
    // Start the camera
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.style.display = "block";
      } catch (error) {
        alert("Unable to access the camera.");
        console.error(error);
      }
    }
  
    // Capture photo and redirect
    captureButton.addEventListener("click", async () => {
      await startCamera();
  
      setTimeout(() => {
        // Set canvas size and capture the image
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
        // Convert the image to base64 and save it to local storage
        const photo = canvas.toDataURL("image/png");
        localStorage.setItem("capturedPhoto", photo);
  
        // Redirect to the maintenance page
        window.location.href = "detection.html";
      }, 2000); // 2-second delay to ensure video is ready
    });
  });
  