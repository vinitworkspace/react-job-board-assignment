
### **1. Conceptual Questions**

**a. What are React hooks?**
React hooks are special functions that let you add features like state (memory) and effects (actions) to your simple function components.

**b. Explain how you would optimize rendering performance in a React app with a long list (e.g., hundreds of job postings).**
To optimize rendering performance in a React app with a long list, you can use techniques such as:
- **Virtualization:** Use libraries like `react-window` or `react-virtualized` to render only the visible items in the list.
- **Memoization:** Use `React.memo` to prevent unnecessary re-renders of components that do not change.
- **Key Prop:** Ensure each list item has a unique key to help React identify which items have changed.
- **Lazy Loading:** Load data in chunks as the user scrolls down the list.
- **Avoid Inline Functions:** Define functions outside of the render method to prevent re-creation on each render.

**c. Describe your preferred approach to managing form state and validation in React.**
My preferred approach to managing form state and validation in React is to use controlled components along with a state management library like `Formik` or `React Hook Form`. These libraries provide built-in support for handling form state, validation, and error messages. I also use `Yup` for schema-based validation, which allows me to define validation rules in a clear and reusable way. This approach helps keep the form logic organized and makes it easier to manage complex forms with multiple fields.

### **Setup Instructions**

1.  **Clone the repository:** `git clone https://github.com/vinitworkspace/react-job-board-assignment.git`
2.  **Navigate to Directory:** `cd job-listing-app`
3.  **Install Dependencies:** `npm install`
4.  **Start the App:** `npm start`


