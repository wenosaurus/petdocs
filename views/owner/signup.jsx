var React = require("react");

class NewOwner extends React.Component {
    render() {
        return (
            <html>
            <head>
            <title>PetDocs</title><title>PetDocs</title>
            <link rel="stylesheet" href="../main.css" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
            </head>
            <body>
            <header>
            <div className='logo'>
            <a href="/"><img src="../images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/owner/login">Login</a></span>
            </div>
            </header>
            <nav>
            <h2>Owner Signup</h2>
            </nav>
            <main>
            <form className="form" method="POST" action="/owner">
            <table>
            <tr>
            <td>E-mail:</td>
            <td><input className="formField" name="email" type="email" required /></td>
            </tr><tr>
            <td>Password:</td>
            <td><input className="formField" name="password" type="password" required /></td>
            </tr></table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = NewOwner;
