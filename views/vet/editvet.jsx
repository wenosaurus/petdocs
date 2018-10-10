var React = require("react");

class EditVet extends React.Component {
    render() {
        return (
            <html>
            <head>
            </head>
            <body>
            <h1>Account Settings</h1>
            <div>
            <form className="form" method="POST" action={"/vet/" + this.props.vet.id + "?_method=PUT"}>
            <p>Name: <input className="formField" name="name" type="text" defaultValue={this.props.vet.name} /></p>
            <p>E-mail:<input className="formField" name="email" type="email" defaultValue={this.props.vet.email} /></p>
            <p>Password: <input className="formField" name="password" type="password" defaultValue={this.props.vet.password} /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = EditVet;