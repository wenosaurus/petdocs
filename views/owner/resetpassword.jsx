var React = require("react");

class ResetPassword extends React.Component {
    render() {
        return (
            <html>
            <head>
            <title>PetDocs</title>
            <link rel="stylesheet" href="/main.css" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
            </head>
            <body>
            <header>
            <div className='logo'>
            <a href={"/owner/home/" + this.props.owner}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Reset Owner Password</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/owner/password/reset/" + this.props.owner + "?_method=PUT"}>
            <table>
            <tr><td>New Password:</td><td> <input className="formField" name="password" type="text" required /></td></tr>
            <input name="id" type="hidden" value={this.props.owner} />
            </table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = ResetPassword;