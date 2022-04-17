import React from 'react';
import './Repo.css';

const Repo = ({
  repoName,
  description,
  ownerName,
  starsCount,
  numForks,
  language,
  repoUrl,
}) => {
  const redirectToRepo = () => {
    window.location.href = repoUrl;
  };
  const repoCard = (
    <div className="repo-card" onClick={redirectToRepo}>
      <table>
        <tr className="first-row">
          <td>Repo Name </td>
          <td>{repoName}</td>
        </tr>
        <tr>
          <td>
            <strong>Description</strong>
          </td>
          <td>{description}</td>
        </tr>
        <tr>
          <td>
            {' '}
            <strong>Owner</strong>
          </td>
          <td>{ownerName}</td>
        </tr>
        <tr>
          <td>
            <strong>Stars Count</strong>
          </td>
          <td>{starsCount}</td>
        </tr>
        <tr>
          <td>
            <strong>Num Forks</strong>
          </td>
          <td>{numForks}</td>
        </tr>
        <tr>
          <td>
            <strong>Language</strong>{' '}
          </td>
          <td>{language}</td>
        </tr>
      </table>
    </div>
  );
  return repoCard;
  // <div className="repo-card">
  //   <ol>
  //     <li>Repo Name: {repoName}</li>
  //     <li>Description: {description}</li>
  //     <li>Owner: {ownerName}</li>
  //     <li>Stars: {starsCount}</li>
  //     <li>Forks: {numForks}</li>
  //     <li>{language}</li>
  //   </ol>
  // </div>
};

export default Repo;
