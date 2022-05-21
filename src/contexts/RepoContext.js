import { createContext, useState } from 'react';

export const RepoContext = createContext();

const RepoContextProvider = (props) => {
  const [repoQueryDetails, setRepoQueryDetails] = useState({
    repoName: '',
    language: 'go',
    sortBy: 'stars',
    order: 'desc',
  });

  return (
    <RepoContext.Provider value={{ repoQueryDetails, setRepoQueryDetails }}>
      {props.children}
    </RepoContext.Provider>
  );
};

export default RepoContextProvider;
