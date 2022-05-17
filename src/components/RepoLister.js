import { useState } from 'react';
import './Header.css';
import Main from './Main';

const languages = [
  'C',
  'cpp',
  'Java',
  'C#',
  'Python',
  'JavaScript',
  'TypeScript',
  'Ruby',
  'PHP',
];

const languageOptions = [
  {
    label: 'Language',
    value: 'default',
  },
  ...languages.map((language) => ({
    label: language,
    value: language,
  })),
];

const sortByOptions = [
  {
    label: 'Sort By',
    value: 'default',
  },
  {
    label: 'Stars',
    value: 'stars',
  },
  {
    label: 'Name',
    value: 'name',
  },
];

const orderOptions = [
  {
    label: 'Order',
    value: 'default',
  },
  {
    label: 'Ascending',
    value: 'asc',
  },
  {
    label: 'Descending',
    value: 'desc',
  },
];

const getLanguageOptions = () =>
  languageOptions.map((languageOption) => (
    <option value={languageOption.value}>{languageOption.label}</option>
  ));

const getSortByOptions = () =>
  sortByOptions.map((sortByOption) => (
    <option value={sortByOption.value}>{sortByOption.label}</option>
  ));

const getOrderOptions = () =>
  orderOptions.map((orderOption) => (
    <option value={orderOption.value}>{orderOption.label}</option>
  ));

const RepoLister = () => {
  const [repoQueryDetails, setRepoQueryDetails] = useState({
    repoName: null,
    language: null,
    sortBy: null,
    order: null,
  });

  const handleSubmit = (e) => {
    console.log('A form was submitted');
    e.preventDefault();
  };

  const handleChange = (elementName, e) => {
    const updatedRepoQueryDetails = { ...repoQueryDetails };
    updatedRepoQueryDetails[elementName] = e.target.value;
    setRepoQueryDetails(updatedRepoQueryDetails);
  };

  return (
    <>
      <header className="vertical-container">
        <h1>GitHub Repository Lister</h1>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <input
              type="text"
              value={repoQueryDetails.repoName}
              onChange={(e) => handleChange('repoName', e)}
              placeholder="Enter Repository Name"
            />
            <select
              value={repoQueryDetails.language}
              onChange={(e) => handleChange('language', e)}
            >
              {getLanguageOptions()}
            </select>
            <select
              value={repoQueryDetails.sortBy}
              onChange={(e) => handleChange('sortBy', e)}
            >
              {getSortByOptions()}
            </select>
            <select
              value={repoQueryDetails.order}
              onChange={(e) => handleChange('order', e)}
            >
              {getOrderOptions()}
            </select>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </header>
      <main>
        {repoQueryDetails.language &&
          repoQueryDetails.sortBy &&
          repoQueryDetails.order && (
            <Main
              repoName={repoQueryDetails.repoName}
              language={repoQueryDetails.language}
              sortBy={repoQueryDetails.sortBy}
              order={repoQueryDetails.order}
            />
          )}
      </main>
    </>
  );
};

export default RepoLister;
