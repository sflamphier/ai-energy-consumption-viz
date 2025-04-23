// This is a wrapper around the Tableau JavaScript API
// Documentation: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm

declare global {
  interface Window {
    tableau: any;
  }
}

export function loadTableauScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if Tableau is already loaded
    if (window.tableau) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Tableau API'));
    document.head.appendChild(script);
  });
}

export async function initializeTableau(
  container: HTMLElement, 
  url: string,
  options: Record<string, any> = {}
): Promise<any> {
  try {
    await loadTableauScript();
    
    // Ensure Tableau API is loaded
    if (!window.tableau) {
      throw new Error('Tableau API not available');
    }
    
    // Clear any existing visualizations
    container.innerHTML = '';
    
    // Create options object with some defaults
    const vizOptions = {
      hideTabs: true,
      hideToolbar: true,
      ...options
    };
    
    // Create and return the visualization
    return new window.tableau.Viz(container, url, vizOptions);
  } catch (error) {
    console.error('Error initializing Tableau visualization:', error);
    throw error;
  }
}
