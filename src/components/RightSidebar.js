import React, { useState } from 'react';
import "../styles/rightSidebar.scss";

const RightSidebar = ({ toggleSidebar }) => {
  const [selectedWidgets, setSelectedWidgets] = useState({});
  const [isConfirmEnabled, setConfirmEnabled] = useState(false);
  const [addedWidgets, setAddedWidgets] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = [
    {
      id: 'category1',
      name: 'Category1',
      widgets: [
        { id: 'widget1', text: 'widget1' },
        { id: 'widget2', text: 'widget2' }
      ]
    },
    {
      id: 'category2',
      name: 'Category2',
      widgets: [
        { id: 'widget3', text: 'widget3' },
        { id: 'widget4', text: 'widget4' }
      ]
    }
  ];

  const handleWidgetToggle = (categoryId, widgetId) => {
    setSelectedWidgets(prevSelectedWidgets => {
      const newSelectedWidgets = { ...prevSelectedWidgets };
      const selected = newSelectedWidgets[categoryId] || {};
      selected[widgetId] = !selected[widgetId];
      newSelectedWidgets[categoryId] = selected;

      
      const anySelected = Object.values(newSelectedWidgets).some(category =>
        Object.values(category).some(isChecked => isChecked)
      );
      setConfirmEnabled(anySelected);

      return newSelectedWidgets;
    });
  };

  const handleConfirm = () => {
    
    const newWidgets = [];
    for (const categoryId in selectedWidgets) {
      for (const widgetId in selectedWidgets[categoryId]) {
        if (selectedWidgets[categoryId][widgetId]) {
          const widget = categories
            .find(cat => cat.id === categoryId)
            .widgets.find(w => w.id === widgetId);
          newWidgets.push(widget);
        }
      }
    }

    setAddedWidgets(prevWidgets => [...prevWidgets, ...newWidgets]);

    
    setSelectedWidgets({});
    setConfirmEnabled(false);
  };

  const handleRemoveWidget = widgetId => {
    
    setAddedWidgets(prevWidgets =>
      prevWidgets.filter(widget => widget.id !== widgetId)
    );
  };

  const handleCancel = () => {
    // Untick all checkboxes and disable the Confirm button
    setSelectedWidgets({});
    setConfirmEnabled(false);
  };

  const handleClose = () => {
    toggleSidebar();
  };

  const toggleCategory = categoryId => {
    setExpandedCategories(prevExpandedCategories => ({
      ...prevExpandedCategories,
      [categoryId]: !prevExpandedCategories[categoryId],
    }));
  };

  return (
    <div className="right-sidebar">
      <button className="btn-close" onClick={handleClose}>Close</button>
      
      {categories.map(category => (
        <div key={category.id} className="category-section">
          <h4 onClick={() => toggleCategory(category.id)} className="category-title">
            {category.name}
          </h4>
          {expandedCategories[category.id] && (
            <div className="widget-list">
              {category.widgets.map(widget => (
                <div key={widget.id} className="widget-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedWidgets[category.id]?.[widget.id] || false}
                      onChange={() => handleWidgetToggle(category.id, widget.id)}
                    />
                    {widget.text}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="added-widgets">
        <h4>Added Widgets</h4>
        {addedWidgets.length > 0 ? (
          addedWidgets.map(widget => (
            <div key={widget.id} className="widget-item">
              <span>{widget.text}</span>
              <button
                className="btn-remove"
                onClick={() => handleRemoveWidget(widget.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No widgets added.</p>
        )}
      </div>

      <div className="sidebar-actions">
        <button
          className="btn-confirm"
          onClick={handleConfirm}
          disabled={!isConfirmEnabled}
        >
          Confirm
        </button>
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
