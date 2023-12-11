document.addEventListener('DOMContentLoaded', function() {
    const themeOptions = document.querySelectorAll('.choose-theme li');
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
          const selectedColor = this.getAttribute('title');
          applyTheme(selectedColor);
          saveSelectedTheme(selectedColor);
          broadcastThemeChange(selectedColor);
        });
      });
  

    function applyTheme(selectedColor) {
      const root = document.documentElement;
      const body = document.body;
      const settingPanel = document.querySelector('.settingSidebar-body');
      const cards = document.querySelectorAll('.card');
      const settingPanelHeader = document.querySelector('.setting-panel-header');
      if (root && body && settingPanel && settingPanelHeader) {
      switch (selectedColor) {
        case 'white':
          root.style.setProperty('--primary-color', '#ffffff');
          root.style.setProperty('--secondary-color', '#f8f9fa');
          body.style.backgroundColor = '#ffffff';
          document.querySelector('.main-sidebar').style.backgroundColor = '#ffffff';
          document.querySelector('.main-footer').style.backgroundColor = '#ffffff';
          settingPanel.style.backgroundColor = '#ffffff';
          settingPanelHeader.style.backgroundColor = '#ffffff';
          
          
          break;
        
        case 'cyan':
          root.style.setProperty('--primary-color', '#00ffff');
          root.style.setProperty('--secondary-color', '#e0ffff');
          body.style.backgroundColor = '#3dc9b3';
          
          document.querySelector('.main-sidebar').style.backgroundColor = '#3dc9b3';
          document.querySelector('.main-footer').style.backgroundColor = '#3dc9b3';
          settingPanel.style.backgroundColor = '#3dc9b3';
          settingPanelHeader.style.backgroundColor = '#3dc9b3';
          
             
          break;
        case 'black':
       root.style.setProperty('--primary-color', '#000000');
       root.style.setProperty('--secondary-color', '#1a1a1a');
       body.style.backgroundColor = '#191919'; 
       document.querySelector('.main-sidebar').style.backgroundColor = '#191919';
       document.querySelector('.main-footer').style.backgroundColor = '#191919';
       settingPanel.style.backgroundColor = '#191919';
       settingPanelHeader.style.backgroundColor = '#191919';
       
       
       break;
       
        case 'purple':
       root.style.setProperty('--primary-color', '#800080');
       root.style.setProperty('--secondary-color', '#d8bfd8');
       body.style.backgroundColor = '#5e6cdd'; 
       document.querySelector('.main-sidebar').style.backgroundColor = '#5e6cdd';
       document.querySelector('.main-footer').style.backgroundColor = '#5e6cdd';
       settingPanel.style.backgroundColor = '#5e6cdd';
       settingPanelHeader.style.backgroundColor = '#5e6cdd';
       
       break;
        case 'orange':
       root.style.setProperty('--primary-color', '#ffa500');
       root.style.setProperty('--secondary-color', '#ffd700');
       body.style.backgroundColor = '#ffa500'; 
       document.querySelector('.main-sidebar').style.backgroundColor = '#ffa500';
       document.querySelector('.main-footer').style.backgroundColor = '#ffa500';
       settingPanel.style.backgroundColor = '#ffa500';
       settingPanelHeader.style.backgroundColor = '#ffa500';
       
       break;
        case 'green':
       root.style.setProperty('--primary-color', '#008000');
       root.style.setProperty('--secondary-color', '#90ee90');
       body.style.backgroundColor = '#28c76f'; 
       document.querySelector('.main-sidebar').style.backgroundColor = '#28c76f';
       document.querySelector('.main-footer').style.backgroundColor = '#28c76f';
       settingPanel.style.backgroundColor = '#28c76f';
       settingPanelHeader.style.backgroundColor = '#28c76f';
       
       break;
        case 'red':
       root.style.setProperty('--primary-color', '#ff0000');
       root.style.setProperty('--secondary-color', '#ff6347');
       body.style.backgroundColor = '#ef6d6e'; 
       document.querySelector('.main-sidebar').style.backgroundColor = '#ef6d6e';
       document.querySelector('.main-footer').style.backgroundColor = '#ef6d6e';
       settingPanel.style.backgroundColor = '#ef6d6e';
       settingPanelHeader.style.backgroundColor = '#ef6d6e';
       
       
       break;
       
           
       default:
       break;
      }
    }

    }

    function saveSelectedTheme(selectedColor) {
      
      localStorage.setItem('selectedColor', selectedColor);
    }

    function loadSelectedTheme() {
      const storedColor = localStorage.getItem('selectedColor');
      if (!storedColor) {
        applyTheme('black');
      }else{
        applyTheme(storedColor);
      }
    }

    function broadcastThemeChange(selectedColor) {
    localStorage.setItem('themeChanged', selectedColor);
  }

  function handleThemeChange(event) {
    if (event.key === 'themeChanged') {
      const newTheme = event.newValue;
      if (newTheme) {
        applyTheme(newTheme);
      }
    }
  }

  window.addEventListener('storage', handleThemeChange);

    
    loadSelectedTheme();
  });