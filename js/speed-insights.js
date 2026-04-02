/**
 * Vercel Speed Insights initialization
 * This script loads and initializes Vercel Speed Insights for the website
 */
(function() {
  'use strict';
  
  // Initialize the Speed Insights queue
  window.si = window.si || function () {
    (window.siq = window.siq || []).push(arguments);
  };
  
  // Load the Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  // Insert the script into the document
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(script, firstScript);
})();
