export const NEW_TASK = 'NEW_TASK';
export const CHANGE_TASK = 'CHANGE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const handleTaskAddition = (newName, newDescription) => ({
  type: NEW_TASK,
  payload: {
      name: newName,
      description: newDescription
  }
});

export const handleTaskCompletion = (id) => ({
    type: CHANGE_TASK,
    payload: id
})

export const handleTaskRemoval = (id) => ({
    type: REMOVE_TASK,
    payload: id
})
