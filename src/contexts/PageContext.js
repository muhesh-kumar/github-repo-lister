import { createContext, useState } from 'react';

import React from 'react';

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);

  return (
    <PageContext.Provider value={{ totalNumberOfPages, setTotalNumberOfPages }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
