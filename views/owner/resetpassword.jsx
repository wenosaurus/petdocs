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
            <h2>Reset Owner Password</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/owner/password/reset/" + this.props.owner + "?_method=PUT"}>
            <p>New Password: <input className="formField" name="password" type="text" required /></p>
            <input name="id" type="hidden" value={this.props.owner} />
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            <aside>
            <p><a href={"/owner/home/" + this.props.owner}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = ResetPassword;