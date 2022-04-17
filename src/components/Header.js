import React from 'react';
import './Header.css';

const languages = [
  'C',
  'C++',
  'Java',
  'C#',
  'Python',
  'JavaScript',
  'TypeScript',
  'Ruby',
  'PHP',
];

class Header extends React.Component {
  render() {
    const languageOptions = [];
    for (const language of languages) {
      languageOptions.push(<option value={language}>{language}</option>);
    }
    return (
      <header className="vertical-container">
        <h1>GitHub Repository Lister</h1>
        <div className="container">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Repository Name"
          />
          <select name="" id="">
            <option value="default">Language</option>
            {languageOptions}
          </select>
          <select name="" id="">
            <option value="default">Sort By</option>
            <option value="stars">Stars</option>
            <option value="name">Name</option>
          </select>
          <select name="" id="">
            <option value="default">Order</option>
            <option value="asc">Ascending Order</option>
            <option value="desc">Descending Order</option>
          </select>
        </div>
      </header>
    );
  }
}

export default Header;
