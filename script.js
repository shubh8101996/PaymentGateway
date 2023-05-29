function handlePayment() {
  // Call the payment gateway API and handle the payment process
  // Once the payment is successful, execute the following code

  // Simulating a successful payment
  const paymentSuccessful = true;

  if (paymentSuccessful) {
    // Create a temporary link to trigger the file download
    const downloadLink = document.createElement('a');
    downloadLink.href = 'E:/testing/java/Selenium PDF.pdf'; // Replace with the actual file URL
    downloadLink.download = 'file.pdf'; // Specify the desired file name
    downloadLink.click();
  } else {
    alert('Payment failed. Please try again.');
  }
}
