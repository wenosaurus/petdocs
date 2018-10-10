var React = require("react");

class VetHome extends React.Component {
  render() {
    let fileList = this.props.file.map(item => {
      return <li>{item.name}</li>;
    })
    return (
      <html>
      <head>
        </head>
        <body>
        <div>
        <ul>
        {fileList}
        </ul>
        </div>
        </body>
        </html>
        );
  }
};

module.exports = VetHome;
