var React = require("react");

class EditVet extends React.Component {
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
            <a href={"/vet/home/" + this.props.vet.id}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Account Settings</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/vet/" + this.props.vet.id + "?_method=PUT"}>
            <table><tr><td>
            Name:</td><td> <input className="formField" name="name" type="text" defaultValue={this.props.vet.name} /></td></tr>
            <tr><td>E-mail:</td> <td> <input className="formField" name="email" type="email" defaultValue={this.props.vet.email} /></td></tr>
            <input name="id" type="hidden" value={this.props.vet.id} />
            </table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            <p><a href={"/vet/password/" + this.props.vet.id}>Reset Password</a></p>
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = EditVet;