import React, { useState } from 'react';
import Category from './Category';
import Search from './Search';


import Navbar from './NavBar';


import "../styles/dashboard.scss";

const Dashboard = () => {
 
  const [categories, setCategories] = useState([
    {
      id: 'category1',
      name: 'Category1',
      widgets: []
    },
    {
      id: 'category2',
      name: 'Category2',
      widgets: []
    }
  ]);

  const allWidgets = [
    { id: 'widget1', text: 'widget1', type: 'pieChart' },
    { id: 'widget2', text: 'widget2', type: 'pieChart' },
    { id: 'widget3', text: 'widget3', type: 'barChart' },
    { id: 'widget4', text: 'widget4', type: 'progressBar' }, 
  
   
  ];

  const handleAddWidget = (categoryId, widget) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      )
    );
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === categoryId
          ? { ...category, widgets: category.widgets.filter(w => w.id !== widgetId) }
          : category
      )
    );
  };


  return (
    <div className="dashboard-container">
      <Navbar />
      <Search allWidgets={allWidgets} />
      {categories.map(category => (
        <Category
          key={category.id}
          category={category}
          allWidgets={allWidgets}
          onAddWidget={handleAddWidget}
          onRemoveWidget={handleRemoveWidget}
        />
      ))}
    </div>
  );



};

export default Dashboard;

