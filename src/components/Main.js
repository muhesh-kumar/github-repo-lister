import React from 'react';
import Repo from './Repo';

// const url = 'https://api.github.com/repositories';
const fullUrl =
  ' https://api.github.com/search/repositories?q=language:go&sort=stars&order=desc&page=1&per_page=10';

class Main extends React.Component {
  state = {
    // for first tye of link to list all public repos
    // data: [],
    data: {},
  };

  componentDidMount() {
    fetch(fullUrl)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        // console.log(result);
        this.setState({ data: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const repos = [];
    if (this.state.data.length > 0) {
      console.log(this.state.data);
      for (const repo of this.state.data) {
        repos.push(
          <Repo
            repoName={repo.full_name}
            description={repo.description}
            ownerName={repo.owner.login}
          />
        );
      }
    }

    if (typeof this.state.data.items !== 'undefined') {
      console.log(this.state.data.items);
      for (const repo of this.state.data.items) {
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
  }
}

export default Main;
