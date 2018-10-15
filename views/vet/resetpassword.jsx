var React = require("react");

class ResetPassword extends React.Component {
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
            <h2>Reset Vet Password</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/vet/password/reset/" + this.props.vet + "?_method=PUT"}>
            <p>New Password: <input className="formField" name="password" type="text" required /></p>
            <input name="id" type="hidden" value={this.props.vet} />
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            <aside>
            <p><a href={"/vet/home/" + this.props.vet}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = ResetPassword;