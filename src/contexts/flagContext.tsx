import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Flags, FlagsState } from 'types/flags';

const initialState: FlagsState = {
  flags: {
    taskListLite: false,
    sandbox: false,
    pdfExport: false
  },
  isLoaded: false
};

const FlagContext = React.createContext(initialState);

type FlagProviderProps = {
  children: React.ReactNode;
};

export const FlagProvider = ({ children }: FlagProviderProps) => {
  const [flagState, setFlagState] = useState(initialState);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_ADDRESS}/flags`
        );
        setFlagState(prevState => ({
          flags: {
            ...prevState.flags,
            ...response.data
          },
          isLoaded: true
        }));
      } catch (error) {
        setFlagState(state => ({ ...state, isLoaded: true }));
        if (process.env.NODE_ENV !== 'test') {
          // eslint-disable-next-line no-console
          console.error(`Failed to load flags! #{response}`);
        }
      }
    };

    fetchFlags();
  }, []);

  return (
    <FlagContext.Provider value={flagState}>
      {flagState.isLoaded && children}
    </FlagContext.Provider>
  );
};

// useFlags is the main way to work with flags within the application
//
// const flags = useFlags();
export const useFlags = (): Flags => {
  const context = React.useContext(FlagContext);
  if (context === undefined) {
    return initialState.flags;
  }
  return context.flags;
};
