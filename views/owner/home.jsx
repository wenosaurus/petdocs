var React = require("react");

class OwnerHome extends React.Component {
  render() {
    let petList = this.props.pet.map(item => {
      return <li>{item.name}</li>;
    })
    return (
      <html>
      <head>
        </head>
        <body>
        <div>
        <ul>
        {petList}
        </ul>
        </div>
        </body>
        </html>
        );
  }
};

module.exports = OwnerHome;
