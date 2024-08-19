import React, { useState } from 'react';

const AddWidget = ({ allWidgets = [], categoryId, onAddWidget }) => {
  const [selectedWidgetIds, setSelectedWidgetIds] = useState([]);

  const handleCheckboxChange = (widgetId) => {
    setSelectedWidgetIds(prev =>
      prev.includes(widgetId)
        ? prev.filter(id => id !== widgetId)
        : [...prev, widgetId]
    );
  };

  const handleAdd = () => {
    selectedWidgetIds.forEach(widgetId => {
      const widget = allWidgets.find(w => w.id === widgetId);
      onAddWidget(categoryId, widget);
    });
    setSelectedWidgetIds([]);
  };

  return (
    <div className="add-widget">
      {allWidgets.map(widget => (
        <div key={widget.id}>
          <input
            type="checkbox"
            id={widget.id}
            value={widget.id}
            checked={selectedWidgetIds.includes(widget.id)}
            onChange={() => handleCheckboxChange(widget.id)}
          />
          <label htmlFor={widget.id}>{widget.text}</label>
        </div>
      ))}
      <button onClick={handleAdd} disabled={selectedWidgetIds.length === 0}>
        Add Widget
      </button>
    </div>
  );
};

export default AddWidget;


