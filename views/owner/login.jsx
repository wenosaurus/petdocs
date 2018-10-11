var React = require("react");

class LoginOwner extends React.Component {
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
            <h2>Owner Login</h2>
            </nav>
            <main>
            <form className="form" method="POST" action="/ownerlogin">
            <p>E-mail: <input className="formField" name="email" type="email" required /></p>
            <p>Password: <input className="formField" name="password" type="password" required /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            </body>
            </html>
        );
    }
};

module.exports = LoginOwner;