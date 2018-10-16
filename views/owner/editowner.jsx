var React = require("react");

class EditOwner extends React.Component {
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
            <a href={"/owner/home/" + this.props.owner.id}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Account Settings</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/owner/" + this.props.owner.id + "?_method=PUT"}>
            <table>
            <tr><td>Name:</td>
            <td><input className="formField" name="name" type="text" defaultValue={this.props.owner.name} /></td></tr>
            <tr>
            <td>E-mail:</td><td><input className="formField" name="email" type="email" defaultValue={this.props.owner.email} /></td></tr>
            <input name="id" type="hidden" value={this.props.owner.id} />
            </table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            <p><a href={"/owner/password/" + this.props.owner.id}>Reset Password</a></p>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = EditOwner;