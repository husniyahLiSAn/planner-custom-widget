# Explanation of My Planner App - Custom Widgets

The `ProgressTracker` widget was built to provide users with a visual representation of their progress in completing tasks. It allows users to manage and track their tasks, mark them as completed, and calculate the overall progress.

The widget works as follows:

1. Task Management:
   - Users can add new tasks by clicking the "+ New" button. This appends an empty task object to the `taskListData` array.
   - Each task is represented by an input field where users can enter the task title. They can also press the Enter key to create a new empty task and continue entering titles.
   - Users can edit the task title by typing directly into the input field. The changes are reflected in the `taskListData` array.

2. Task Completion:
   - Each task has a "Completed" button associated with it. Clicking the button triggers the `handleTaskCompletion` function, which marks the corresponding task as completed.
   - When a task is marked as completed, the `completed` property of the task in the `taskListData` array is set to `true`.
   - The "Completed" button is disabled for tasks that are already marked as completed. This prevents users from clicking it multiple times.

3. Task Deletion:
   - Each task has a "Delete" button associated with it. Clicking the button triggers the `handleDeleteTask` function, which removes the corresponding task from the `taskListData` array.
   - The task is deleted using the `splice` method, which modifies the `taskListData` array by removing the task at the specified index.

4. Progress Calculation:
   - The progress information is displayed at the top of the widget.
   - The progress percentage is calculated by dividing the number of completed tasks (filtered from the `taskListData` array) by the total number of tasks, and then multiplying by 100.
   - The number of completed tasks and the total number of tasks are derived from the `taskListData` array.

Overall, the `ProgressTracker` widget provides users with a way to manage their tasks, mark them as completed, and track their progress. It offers an intuitive interface for adding, editing, completing, and deleting tasks, while dynamically updating the progress information based on the user's interactions.