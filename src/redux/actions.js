
export const setData = (data) => ({
  type: 'SET_DATA',
  payload: data,
});

export const addWidget = (categoryId, widget) => ({
  type: 'ADD_WIDGET', 
  payload: { categoryId, widget },
});

export const removeWidget = (categoryId, widgetId) => ({
  type: 'REMOVE_WIDGET',
  payload: { categoryId, widgetId },
});
