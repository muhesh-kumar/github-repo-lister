import { useEffect, useState, useContext } from 'react';

import { RepoContext } from '../contexts/RepoContext';
import { PageContext } from '../contexts/PageContext';

import Repo from './Repo';

const Main = () => {
  const [data, setData] = useState({});

  const { repoQueryDetails } = useContext(RepoContext);
  const { repoName, language, sortBy, order, currentPageNumber } =
    repoQueryDetails;
  const { setTotalNumberOfPages } = useContext(PageContext);

  const fullUrl = `
    https://api.github.com/search/repositories?q=${
      repoName !== '' ? 'name:' + repoName + '&' : ''
    }language:${language}&sort=${sortBy}&order=${order}&page=${currentPageNumber}&per_page=10
  `;

  let totalPages = 0;

  useEffect(() => {
    fetch(fullUrl)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        totalPages = Math.ceil(result.total_count / 10);
        setTotalNumberOfPages(totalPages);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fullUrl]);

  const repos = [];
  if (data.length > 0) {
    console.log(data);
    for (const repo of data) {
      repos.push(
        <Repo
          repoName={repo.full_name}
          description={repo.description}
          ownerName={repo.owner.login}
        />
      );
    }
  }

  if (typeof data.items !== 'undefined') {
    for (const repo of data.items) {
      repos.push(
        <Repo
          repoName={repo.full_name}
          description={repo.description}
          ownerName={repo.owner.login}
          starsCount={repo.stargazers_count}
          numForks={repo.forks_count}
          language={repo.language}
          repoUrl={repo.html_url}
        />
      );
    }
  }

  return (
    <main className="vertical-container">
      <h2>Selected List of Repositories</h2>
      <div className="vertical-container">{repos}</div>
    </main>
  );
};

export default Main;
