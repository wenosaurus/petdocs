var React = require("react");

class fileDelete extends React.Component {
    render() {
        return (
            <html>
            <head>
            </head>
            <body>
            <h1>Delete File</h1>
            <div>
            <form className="form" method="POST" action={"/vet/file/delete" + this.props.file.id + "?_method=DELETE"}>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = fileDelete;