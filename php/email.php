<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Check if email is provided in the POST request
if (isset($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate the email format
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $file = 'emails.txt'; // Path to the text file
        $content = $email . PHP_EOL; // Add the email with a newline

        // Append the email to the file
        if (file_put_contents($file, $content, FILE_APPEND | LOCK_EX)) {
            echo json_encode(["status" => "success", "message" => "Email successfully added to the waiting list!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Something went wrong. Please try again."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No email provided."]);
}
?>
