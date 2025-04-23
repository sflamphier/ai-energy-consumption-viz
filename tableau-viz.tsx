import { useState, useEffect, useRef } from "react";
import { initializeTableau } from "@/lib/tableau-helpers";

interface TableauVizProps {
  src: string;
  height: string;
  width?: string;
  options?: Record<string, any>;
  fallbackIcon?: React.ReactNode;
  fallbackText?: string;
}

export function TableauViz({ 
  src, 
  height, 
  width = "100%", 
  options = {}, 
  fallbackIcon,
  fallbackText
}: TableauVizProps) {
  const vizRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!vizRef.current) return;

    const loadViz = async () => {
      try {
        setIsLoading(true);
        setError(null);
        await initializeTableau(vizRef.current, src, options);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to load Tableau visualization:", err);
        setError("Failed to load visualization. Please try again later.");
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      loadViz();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [src, options]);

  // Show loading or error state
  if (isLoading || error) {
    return (
      <div 
        className="border border-gray-200 rounded-lg bg-gray-50 p-4 flex flex-col items-center justify-center" 
        style={{ height, width }}
      >
        {isLoading ? (
          <>
            <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-500 text-center">Loading visualization...</p>
          </>
        ) : (
          <>
            {fallbackIcon}
            <p className="text-gray-500 text-center mt-4">{error}</p>
            {fallbackText && <p className="text-gray-400 text-center mt-2 text-sm">{fallbackText}</p>}
          </>
        )}
      </div>
    );
  }

  // Tableau viz container
  return (
    <div 
      ref={vizRef} 
      className="border border-gray-200 rounded-lg overflow-hidden" 
      style={{ height, width }}
    ></div>
  );
}
