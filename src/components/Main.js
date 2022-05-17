import { useEffect, useState } from 'react';
import Repo from './Repo';

// const url = 'https://api.github.com/repositories';
// const sampleUrl =
//   ' https://api.github.com/search/repositories?q=language:go&sort=stars&order=desc&page=1&per_page=10';

const Main = ({ repoName, language, sortBy, order }) => {
  // for first tye of link to list all public repos
  // data: [],
  const [data, setData] = useState({});

  const fullUrl = `https://api.github.com/search/repositories?q=language:${language}&sort=${sortBy}&order=${order}&page=1&per_page=10`;
  console.log(fullUrl);
  console.log(fullUrl);

  useEffect(() => {
    fetch(fullUrl)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
