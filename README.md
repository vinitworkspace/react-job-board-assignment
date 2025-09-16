

### **Setup Instructions**

1.  **Clone the repository:** `git clone https://github.com/vinitworkspace/react-job-board-assignment.git`
2.  **Navigate to Directory:** `cd job-listing-app`
3.  **Install Dependencies:** `npm install`
4.  **Start the App:** `npm start`

Of course! Here are the answers in brief and simple terms.

3. Debugging Exercise
a. What is wrong?

Search doesn't work: The search box saves what you type, but it doesn't actually use that text to filter the list.

Missing key: Each item in a list needs a unique key (like an ID tag) so React can keep track of it. The code is missing this tag.

b. How to fix it:

First, we filter the jobs using the search text before showing them.

Then, we add a unique key to each list item (<li key={job.id}>).

4. Performance Scenario
a. Two ways to make a long list (500+ items) faster:

Virtualization: Only show the items currently on the screen. As you scroll, it loads more, so the app never feels slow. 🚀

Pagination: Break the long list into small pages (e.g., Page 1, Page 2). This way, you only load a few items at a time.

b. How to stop a job card from re-rendering unnecessarily:

Use React.memo: Wrap your component in React.memo to tell it, "Don't re-render if the information you receive is exactly the same as before."

Use useCallback: Use this for any functions you pass to your component. It prevents the function from being recreated on every render, which helps React.memo do its job. 👍
