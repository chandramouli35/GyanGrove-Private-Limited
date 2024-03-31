# Setup and Local Run Instructions

#### To run this project locally, follow these steps:

# Clone the repository to your local machine:

```
git clone https://github.com/your-username/your-repository.git
```

<br/>

# Navigate to the project directory:

```
cd your-repository
```

<br/>

# Install dependencies:
```javascript
npm install
```

<br/>

# Start the development server:

```javascript
npm run dev
```


Open your browser and navigate to http://localhost:5173 to view the application.

<br/>

# Design and Technical Decisions

<br/>


# Frontend Technologies Used:

React: Used for building the user interface components and managing application state.

Axios: Used for making HTTP requests to the backend server.

react-lazy-load-image-component: Used for lazy loading images to improve performance.

react-slick: Used for creating a carousel to display recommended shows.

<br/>
<br/>
<br/>

# File Structure:
src/components: Contains React components for different parts of the application such as Navbar, Banner, Events, and Shows.

src/assets: Contains images used in the application.

src/styles: Contains CSS files for styling the components.

README.md: Contains project overview, setup instructions, and technical decisions.
<br/>
<br/>
<br/>
# Design Decisions:

Implemented lazy loading of images using react-lazy-load-image-component to improve page loading performance.
Used a carousel (slider) component from react-slick to display recommended shows in a visually appealing way.

Followed a modular component-based architecture to maintain code readability and scalability.

Implemented error handling for failed API requests using React state to display error messages to users.