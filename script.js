document.getElementById("sendLocation").addEventListener("click", () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                // Format a Google Maps link
                const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

                // Replace with your WhatsApp number
                const phoneNumber = "YOUR_PHONE_NUMBER"; // e.g., "201234567890" (for Egypt)
                const message = `Hi! I am sharing my location: ${mapsLink}`;

                // Generate the WhatsApp link
                const whatsappLink = `https://wa.me/${+201026692641}?text=${encodeURIComponent(message)}`;

                // Redirect to WhatsApp
                window.open(whatsappLink, "_blank");
            },
            (error) => {
                alert("Error fetching location: " + error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});
