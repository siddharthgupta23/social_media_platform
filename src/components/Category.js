import React from 'react';
import Widget from './Widget';
import AddWidget from './AddWidget';


const Category = ({ category, allWidgets, onAddWidget, onRemoveWidget }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => onRemoveWidget(category.id, widget.id)}
          />
        ))}
      </div>
      <AddWidget
        allWidgets={allWidgets}
        categoryId={category.id}
        onAddWidget={onAddWidget}
      />
    </div>
  );
};

export default Category;
