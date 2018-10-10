var React = require("react");

class fileEdit extends React.Component {
    render() {
        var fileDate = new Date(this.props.file.date).toISOString().slice(0, 10);
        return (
            <html>
            <head>
            </head>
            <body>
            <h1>Delete File</h1>
            <div>
            <p>Are you sure you want to delete {this.props.file.name} for {this.props.file.pet_id}?</p>
            <form className="form" method="POST" action={"/vet/file/" + this.props.file.id + "?_method=PUT"}>
            <p>File: <input className="formField" name="name" type="text" defaultValue={this.props.file.name} /></p>
            <p>Date:<input className="formField" name="date" type="date" defaultValue={fileDate} /></p>
            <p>Pet ID: <input className="formField" name="pet_id" type="text" defaultValue={this.props.file.id} /></p>
            <p><input className="formButton" type="submit" value="Yes" /></p>
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = fileEdit;