
const initialState = {
  categories: [], 
  allWidgets: [], 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        categories: action.payload.categories,
        allWidgets: action.payload.allWidgets,
      };

    case 'ADD_WIDGET': {
      const { categoryId, widget } = action.payload;
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === categoryId
            ? { ...category, widgets: [...category.widgets, widget] }
            : category
        ),
      };
    }

    case 'REMOVE_WIDGET': {
      const { categoryId, widgetId } = action.payload;
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== widgetId),
              }
            : category
        ),
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
