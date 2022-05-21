import { useContext } from 'react';

import './Footer.css';

import { RepoContext } from '../contexts/RepoContext';
import { PageContext } from '../contexts/PageContext';

const Footer = () => {
  const { repoQueryDetails, setRepoQueryDetails } = useContext(RepoContext);
  const { currentPageNumber } = repoQueryDetails;
  const { totalNumberOfPages } = useContext(PageContext);

  const goToPreviousPage = () => {
    setRepoQueryDetails({
      ...repoQueryDetails,
      currentPageNumber: Math.max(1, currentPageNumber - 1),
    });
  };

  const goToNextPage = () => {
    setRepoQueryDetails({
      ...repoQueryDetails,
      currentPageNumber: Math.min(totalNumberOfPages, currentPageNumber + 1),
    });
  };

  const goToPage = (pageNum) => {
    setRepoQueryDetails({
      ...repoQueryDetails,
      currentPageNumber: pageNum,
    });
  };

  const pageBtns = [];
  for (
    let pageNum = currentPageNumber;
    pageNum < Math.min(currentPageNumber + 5, totalNumberOfPages);
    pageNum++
  ) {
    pageBtns.push(<button onClick={() => goToPage(pageNum)}>{pageNum}</button>);
  }

  return (
    <div className="pagination-container">
      <button onClick={goToPreviousPage}>Previous Page</button>
      {pageBtns}
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
};

export default Footer;
