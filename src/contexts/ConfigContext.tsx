import React, { createContext, useContext, useState, useEffect } from 'react';

interface ConfigState {
  showPrices: boolean;
}

interface ConfigContextType {
  config: ConfigState;
  togglePriceVisibility: () => void;
}

const ConfigContext = createContext<ConfigContextType | null>(null);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ConfigState>({
    showPrices: false,
  });

  useEffect(() => {
    const updatePriceVisibility = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const showPrice = searchParams.get('showPrice') === 'true';
      setConfig(prev => ({ ...prev, showPrices: showPrice }));
    };

    // Initial check
    updatePriceVisibility();

    // Listen for URL changes
    window.addEventListener('popstate', updatePriceVisibility);
    return () => window.removeEventListener('popstate', updatePriceVisibility);
  }, []);

  const togglePriceVisibility = () => {
    const newShowPrices = !config.showPrices;
    const url = new URL(window.location.href);
    
    if (newShowPrices) {
      url.searchParams.set('showPrice', 'true');
    } else {
      url.searchParams.delete('showPrice');
    }
    
    window.history.pushState({}, '', url);
    setConfig(prev => ({ ...prev, showPrices: newShowPrices }));
  };

  return (
    <ConfigContext.Provider value={{ config, togglePriceVisibility }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};