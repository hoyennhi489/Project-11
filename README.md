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