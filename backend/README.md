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

Description

Registers a new captain by creating a captain account with the provided information.
HTTP Method
POST
Request Body

The request body should be in JSON format and include the following fields:
•	fullname (object):
o	firstname (string, required): Captain's first name (minimum 3 characters)
o	lastname (string, optional): Captain's last name
•	email (string, required): Captain's email address (must be a valid email)
•	password (string, required): Captain's password (minimum 6 characters)
•	vehicle (object):
o	color (string, required): Vehicle color (minimum 3 characters)
o	plate (string, required): Vehicle plate number (minimum 3 characters)
o	capacity (number, required): Vehicle passenger capacity (minimum 1)
o	vehicleType (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto')


📑 Captain APIs Documentation
📌 /captains/register Endpoint
Description:
Registers a new captain by creating a captain account with the provided details.

HTTP Method:
POST

Request Body (JSON):

fullname (object):

firstname (string, required): Minimum 3 characters

lastname (string, optional)

email (string, required): Must be a valid email

password (string, required): Minimum 6 characters

vehicle (object):

color (string, required): Minimum 3 characters

plate (string, required): Minimum 3 characters

capacity (number, required): Minimum 1

vehicleType (string, required): Must be one of car, motorcycle, or auto

Example Response:

captain (object):

fullname:

firstname (string)

lastname (string)

email (string)

vehicle:

color (string)

plate (string)

capacity (number)

vehicleType (string)

token (string): JWT token

📌 /captains/login Endpoint
Description:
Authenticates a captain using their email and password, returning a JWT token upon successful login.

HTTP Method:
POST

Request Body (JSON):

email (string, required): Valid email

password (string, required): Minimum 6 characters

Example Response:

captain (object):

fullname:

firstname (string)

lastname (string)

email (string)

vehicle:

color (string)

plate (string)

capacity (number)

vehicleType (string)

token (string): JWT token

📌 /captains/profile Endpoint
Description:
Retrieves the profile information of the currently authenticated captain.

HTTP Method:
GET

Authentication:
Requires a valid JWT token in the Authorization header:

makefile
Copy
Edit
Authorization: Bearer <token>
Example Response:

captain (object):

fullname:

firstname (string)

lastname (string)

email (string)

vehicle:

color (string)

plate (string)

capacity (number)

vehicleType (string)

📌 /captains/logout Endpoint
Description:
Logs out the currently authenticated captain and blacklists the provided JWT token from either cookie or header.

HTTP Method:
GET

Authentication:
Requires a valid JWT token either in:

Authorization header:

makefile
Copy
Edit
Authorization: Bearer <token>
Or Cookie

Example Response:

message (string): Logout successfully.





