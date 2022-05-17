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
};

export default Repo;
