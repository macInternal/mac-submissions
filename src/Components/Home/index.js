import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Mathematical Advancement Committee</h1>
        <h2>About Us</h2>
        <p>We are a group of USAJMO and AIME qualifiers who have been working together to bring a series of high-quality mock contests that accurately simulate the real thing. Our current members are:</p>

        <ul style={{listStyle: "square"}}>
          <li>Alex Zheng</li>
          <li>Amol Rama</li>
          <li>Dennis Chen</li>
          <li>Depsilon0</li>
          <li>Dylan Yu</li>
          <li>Ethan Han</li>
          <li>skyscraper</li>
          <li>vvluo</li>
          <li>William Dai</li>
        </ul>

        <h2>Contest Listings</h2>
        <table>
          <thead>
            <tr>
              <th>Problems</th>
              <th>Solutions</th>
              <th>AoPS Thread</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="summer">
                <a href="/pdfs/JMC10.pdf">JMC 10 Problems</a>
              </td>
              <td className="summer">
                <a href="/pdfs/jmcsol.pdf">JMC 10 Solutions</a>
              </td>
              <td className="summer">
                <a href="https://artofproblemsolving.com/community/c594864h2164953_jmc_10_released_july_mock_amc">JMC 10 AoPS Thread</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
