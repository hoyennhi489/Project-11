This is a learning project created with the help of AI tools in Visual Studio Code. Some bugs are intentionally left in the source code so I can practice debugging and fixing issues.

### Learning Journal (Fixing Input Reset & Data Display)

Today, I worked on a simple Book List application and focused on fixing basic issues related to input handling and data display.

Previously, after adding a book, the input fields were not cleared, which made it inconvenient to add multiple books. I realized that the `title` and `author` states were not being reset after adding a book. I fixed this by setting both values back to empty strings after updating the book list.

I also reviewed how the book list was displayed and found an issue where the author name was not shown correctly. This happened because I used the wrong property when rendering the data. After correcting it to use the `author` field, the information displayed properly.

After these fixes, the application now works as expected: the inputs are cleared after each submission, and the data is displayed correctly.

From this task, I learned:

* How to properly reset state after user actions
* The importance of using correct data when rendering in React
* How small mistakes can directly affect user experience

This was a small improvement, but it helped me better understand how React handles state and rendering.

---

### Learning Journal – Day 2 (Adding Delete Feature & Item Order)

Today, I continued improving my Book List application by adding a delete feature and displaying the order of each book.

Previously, the app only allowed adding books, which made it incomplete and less practical. I implemented a delete function that allows users to remove a book from the list. To do this, I used the `filter()` method to update the state by removing the selected item.

I also learned that using the array index as a key is not a good practice. To fix this, I added a unique `id` for each book using `Date.now()`. This helps React correctly track each item and prevents potential rendering issues.

Additionally, I improved the UI by displaying the order number for each book (1, 2, 3...). This makes the list clearer and easier to follow.

From this task, I learned:

* How to remove items from state using `filter()`
* Why unique keys are important in React lists
* The risks of using index as a key
* How small UI improvements can enhance user experience

After these changes, the application feels more complete and behaves more reliably.