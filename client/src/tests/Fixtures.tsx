export const TodoList = [
    {
      id: 1,
      name: 'first',
      description: 'first text',
      status: 'pending'
    },
    {
      id: 2,
      name: 'second',
      description: 'second text',
      status: 'pending'
    },
    { id: 3, name: 'three', description: 'three text', status: 'done' },
    { id: 4, name: 'four', description: 'four text', status: 'pending' },
    { id: 5, name: 'five', description: 'five text', status: 'done' },
    { id: 6, name: 'six', description: 'six text', status: 'pending' },
    { id: 7, name: 'seven', description: 'seven text', status: 'done' },
    {
      id: 8,
      name: 'eight',
      description: 'eight text',
      status: 'pending'
    },
    { id: 9, name: 'nine', description: 'nine text', status: 'done' },
    { id: 10, name: 'ten', description: 'ten text', status: 'pending' }
  ];
export const toUpdate = {
  id: 1,
  name: 'first',
  description: 'first text',
  status: 'done'
};

export const updatedTodo = {
  id: 1,
  name: 'first',
  description: 'first text',
  status: 'done'
};

export function getTestTodo(){
    return (
        TodoList
    )
}

export function updateTestTodo(){
  return (
    updatedTodo
  )
}
