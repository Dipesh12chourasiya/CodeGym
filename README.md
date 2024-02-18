# GymCode

GymCode is a web application designed to help users manage their fitness journey by providing access to blogs, diet plans, and fitness videos.

## Features

- **User Authentication**: Users can register, login, and manage their profiles.
- **Blogging Platform**: Users can create, read, update, and delete their blog posts.
- **Diet Plans**: Access to curated diet plans for maintaining a healthy lifestyle.
- **YouTube Integration**: Integration with YouTube to watch fitness-related videos.
- **MongoDB Integration**: Data storage and management using MongoDB.
- **Express Server**: Backend powered by Express.js.
- **Views**: Frontend rendered using EJS templates.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/GymCode.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Define the following environment variables:
        - `PORT`: Port number for the server (default: 8000)
        - `MONGODB_URI`: MongoDB connection URI
        - `API_KEY`: Your Google API key for YouTube integration

4. Start the server:

    ```bash
    npm start
    ```

## Usage

- Access the application by navigating to `http://localhost:8000` in your web browser.
- Utilize the provided features to manage blogs, view diet plans, and watch fitness videos.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
