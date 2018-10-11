var React = require("react");

class EditOwner extends React.Component {
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
            <form className="form" method="POST" action={"/owner/" + this.props.owner.id + "?_method=PUT"}>
            <p>Name: <input className="formField" name="name" type="text" defaultValue={this.props.owner.name} /></p>
            <p>E-mail:<input className="formField" name="email" type="email" defaultValue={this.props.owner.email} /></p>
            <p>Password: <input className="formField" name="password" type="password" defaultValue={this.props.owner.password} /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            <aside>
            <p><a href={"/owner/home/" + this.props.owner.id}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = EditOwner;