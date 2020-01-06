let nextTodoId = 0;

export const addTodo = text => ({
  type: 'Add_Todo',
  id: nextTodoId++,
  text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
