import React, { Component } from 'react';
import Quote from './quote';

class QuotesLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allQuotes: [],
    };
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/graphql?query={
                            allQuotes {
                              id,
                              text,
                              author
                            }
                          }`)
      .then((response) => response.json())
      .then((json) => this.setState(json.data))
      .catch((ex) => console.error(ex));
    console.log(this.state);
  };

  render() {
    return (
      <div className="quotes-list">
        {this.state.allQuotes.map((quote) => (
          <Quote key={quote.id} quote={quote} />
        ))}
      </div>
    );
  }
}

export default QuotesLibrary;
