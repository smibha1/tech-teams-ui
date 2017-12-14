import React from 'react';
import IndividualResult from './IndividualProjectResult';

class SearchProjectResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'DEVELOPER',
      projectResults: [
        {
          projectImage: 'http://vignette1.wikia.nocookie.net/gangstamanga/images/5/56/Insert-Photo-Here.jpg/revision/latest?cb=20150827174445',
          projectName: 'DevDates',
          projectDesc: 'I want to dev all day and all night',
          interview: false,
        },
        {
          projectImage: 'http://vignette1.wikia.nocookie.net/gangstamanga/images/5/56/Insert-Photo-Here.jpg/revision/latest?cb=20150827174445',
          projectName: 'Yummy',
          projectDesc: 'GMO-certified foods',
          interview: false,
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <br />
        <h5> Results for {this.state.search} </h5>
        ---------------------------------------------------- <br />

        {this.state.projectResults.map((element, index) => {
          return (
            <div key={index}>
              <IndividualResult element={element} index={index} />      
            </div>
          )

        })}

        



      </div>
    )

  }



}

export default SearchProjectResults;
