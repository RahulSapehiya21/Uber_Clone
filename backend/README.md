📖 Backend API Documentation
📌 /users/register Endpoint
Description:
Registers a new user by creating a user account with the provided information.

HTTP Method: POST

Request Body:

The request should be in JSON format and include:

fullname (object):

firstname (string, required): User's first name (minimum 3 characters)

lastname (string, optional): User's last name (minimum 3 characters)

email (string, required): User's email address (must be a valid email)

password (string, required): User's password (minimum 6 characters)

Example Response:

user (object):

fullname (object)

firstname (string)

lastname (string)

email (string)

password (string)

token (string): JWT token for authenticated sessions

📌 /users/login Endpoint
Description:
Authenticates a user using their email and password, returning a JWT token upon successful login.

HTTP Method: POST

Request Body:

email (string, required): User's email address (must be a valid email)

password (string, required): User's password (minimum 6 characters)

Example Response:

user (object):

fullname (object)

firstname (string)

lastname (string)

email (string)

password (string)

token (string): JWT token for session authentication

📌 /users/profile Endpoint
Description:
Retrieves the profile information of the currently authenticated user.

HTTP Method: GET

Authentication:
Requires a valid JWT token in the request header:

Authorization: Bearer <token>

Example Response:

user (object):

fullname (object)

firstname (string)

lastname (string)

email (string)

📌 /users/logout Endpoint
Description:
Logs out the currently authenticated user by blacklisting the provided token.

HTTP Method: GET

Authentication:
Requires a valid JWT token in either:

Authorization header: Authorization: Bearer <token>
or

Cookie

Example Response:

user (object):

fullname (object)

firstname (string)

lastname (string)

email (string)

password (string)

token (string): JWT token

