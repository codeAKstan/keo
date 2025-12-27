# Implement Authentication & Email Notification

## 1. Install Dependencies

Install the necessary packages for database interaction, authentication, and email services.

* `mongoose`: For MongoDB object modeling.

* `bcryptjs`: For hashing passwords securely.

* `jsonwebtoken`: For generating session tokens (JWT).

* `nodemailer`: For sending emails.

## 2. Database & Models

* **Connection Helper**: Create `lib/mongodb.js` to manage a cached MongoDB connection to prevent multiple connections in development.

* **User Model**: Create `models/User.js` defining the user schema (email, password, business name, etc.).

## 3. Email Utility

* **Email Service**: Create `lib/email.js` using `nodemailer`.

* **Template**: Design a professional HTML email template for the welcome message using the KEO branding.

## 4. API Routes

* **Signup API** (`app/api/auth/signup/route.js`):

  * Validate request body.

  * Check for existing users.

  * Hash password.

  * Create user in MongoDB.

  * Trigger the welcome email.

  * Return success response.

* **Login API** (`app/api/auth/login/route.js`):

  * Validate credentials.

  * Verify password with `bcryptjs`.

  * Generate JWT.

  * Set HttpOnly cookie for session management.

## 5. Frontend Integration

* **Signup Page** (`app/signup/page.js`): Connect the form to the signup API, handle loading states, and error messages.

* **Login Page** (`app/page.js`): Connect the login form to the login API and redirect to the dashboard upon success.

## 6. Environment Configuration

* Verify `.env` contains `MONGODB_URI`, `EMAIL_USER`, and `EMAIL_PASS`.

* Add `JWT_SECRET` for secure token signing.

