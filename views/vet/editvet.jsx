var React = require("react");

class EditVet extends React.Component {
    render() {
        return (
            <html>
            <head>
            <title>PetDocs</title>
            </head>
            <body>
            <header>
            <h1>PetDocs</h1>
            </header>
            <nav>
            <h2>Account Settings</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/vet/" + this.props.vet.id + "?_method=PUT"}>
            <p>Name: <input className="formField" name="name" type="text" defaultValue={this.props.vet.name} /></p>
            <p>E-mail:<input className="formField" name="email" type="email" defaultValue={this.props.vet.email} /></p>
            <input name="id" type="hidden" value={this.props.vet.id} />
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            <aside>
            <p><a href={"/vet/password/" + this.props.vet.id}>Reset Password</a></p>
            <p><a href={"/vet/home/" + this.props.vet.id}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = EditVet;