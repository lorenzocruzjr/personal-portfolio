<?php
// Include PHPMailer files
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();  // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';  // Gmail SMTP server
        $mail->SMTPAuth = true;  // Enable SMTP authentication
        $mail->Username = 'your-email@gmail.com'; // Your Gmail address
        $mail->Password = 'your-app-password'; // Your Gmail app password (or regular password if 2FA is not enabled)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Use TLS encryption
        $mail->Port = 587;  // Port for Gmail (use 465 for SSL)

        // Sender and recipient information
        $mail->setFrom('your-email@gmail.com', 'Your Name');  // Your email and name (this will appear as the sender)
        $mail->addAddress('recipient-email@example.com');  // Recipient's email

        // Email content
        $mail->isHTML(false);  // Send email in plain text format (you can change this to true if you want HTML email)
        $mail->Subject = 'New Message from Portfolio Contact Form';  // Subject of the email
        $mail->Body    = "Name: $name\nEmail: $email\nMessage: $message";  // Body of the email

        // Send email
        $mail->send();
        echo 'Message has been sent';  // Success message
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";  // Error message if sending fails
    }
}
?>
