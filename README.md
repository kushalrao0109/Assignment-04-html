# Assignment-04-html

🧺 Laundry Services Web App

A responsive front-end laundry booking application that allows users to explore services, add items to a cart, calculate total price, and book a service with email confirmation using EmailJS.

This project focuses on DOM manipulation, dynamic UI updates, form handling, and third-party API integration.

📌 Project Objective

Design and implement a web application for a laundry service that enables users to:

Browse laundry services

Add/remove items from cart

View total price dynamically

Book appointment

Receive confirmation email

🚀 Features
1️⃣ Navigation Bar

Sticky responsive navbar

Logo on left

Menu: Home, Services, About Us, Contact Us

Username on right

2️⃣ Hero Section

Service heading and description

CTA button → scrolls to booking section

Laundry illustration image

3️⃣ Service Achievements

Displays company stats:

15+ Laundry Services

240+ Happy Customers

2+ Years Experience

4️⃣ Booking System

Left Section — Services List

Dry Cleaning

Wash & Fold

Ironing

Stain Removal

Leather Care

Wedding Dress Cleaning

Buttons:

Add item

Remove item

Right Section — Cart

Displays added services

Auto serial number

Remove individual item

Total amount auto calculated

5️⃣ Booking Form

User enters:

Full Name

Email

Phone Number

Click Book Now →

Validates cart

Sends order details via EmailJS

Shows success message

6️⃣ Quality Section

Highlights:

Premium Services

Quick Support

Hassle-Free Delivery

Affordable Prices

7️⃣ Newsletter Subscription

User can subscribe using email input.

8️⃣ Footer

Includes:

About information

Important links

Contact details

Social media icons

🛠️ Tech Stack
Technology	Purpose
HTML5	Structure
Tailwind CSS	Styling
CSS	Animations
JavaScript	Logic & DOM Manipulation
EmailJS	Email confirmation
Netlify	Deployment
📂 Project Structure
Laundry-Web-App/
│── index.html
│── style.css
│── script.js
│── washing_machine.jpg
│── README.md

⚙️ Setup Instructions
1. Clone Repository
git clone https://github.com/yourusername/laundry-web-app.git
cd laundry-web-app

2. Run Project

Simply open:

index.html


in browser.

📧 EmailJS Configuration (Important)

Create account → https://www.emailjs.com

Create Email Service

Create Email Template

Get:

Public Key

Service ID

Template ID

Update in index.html
emailjs.init('YOUR_PUBLIC_KEY');

Update in script.js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)

🌍 Deployment (Netlify)

Go to https://netlify.com

Login

Drag & drop project folder

Copy generated live URL

Submit the link

🧪 How to Use

Open website

Add services to cart

Check total amount

Fill booking form

Click Book Now

Confirmation message appears

Email sent to admin/user

📸 Screenshot Instructions (For Submission)

Take screenshots of the following sections:

Required Screenshots

Home Page (Hero Section)

Achievements Section

Add Items to Cart

Cart Total Updated

Booking Form Filled

Booking Success Message

How to Capture (Windows)
Press → Windows + Shift + S
Select Area
Save image

How to Capture (Mac)
Press → Command + Shift + 4
Select Area
Save image


Name them:

home.png
services.png
cart.png
total.png
booking.png
success.png


Upload inside:

/screenshots/

📚 Learning Concepts Covered

DOM Manipulation

Event Handling

Dynamic Rendering

Form Validation

API Integration

Responsive Design

Smooth Scrolling

Cart Logic

👨‍💻 Author

Kushal Rao

🎯 Conclusion

This project demonstrates a real-world service booking workflow including cart management and email confirmation, making it a strong beginner-to-intermediate frontend portfolio project.
