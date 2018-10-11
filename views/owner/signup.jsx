var React = require("react");

class NewOwner extends React.Component {
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
            <h2>Owners Signup</h2>
            </nav>
            <main>
            <form className="form" method="POST" action="/owner">
            <p>E-mail:<input className="formField" name="email" type="email" required /></p>
            <p>Password:<input className="formField" name="password" type="password" required /></p>
            <input className="formButton" type="submit" value="Submit" />
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = NewOwner;
