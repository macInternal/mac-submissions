import React from 'react';

export default class OtherProjects extends React.Component {
  render() {
    return (
      <div>

        <h1>Other Projects</h1>
        <h2>AMC 10/12 Class</h2>
        <p>The MAC held a Summer AMC Class in 2020. The material will be used in the future as well. Learn more about it <a href="https://www.geometryexplorer.xyz/amcclass">here</a>.</p>

        <h2>AMC Auto-Grader</h2>
        <p>We've developed an auto-grader for the AMC 10 in C++. It can easily be modified to grade other contests. When run, it will ask for the username of the submitter and their answers, and will match it against the answer key. See the code <a href="/code/grade.cpp">here</a>. While we're not going to be using it anymore since we have an auto-grading form, it may be of use to other people so we are keeping it up here.</p>
      </div>
    );
  }
}