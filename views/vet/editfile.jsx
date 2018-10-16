var React = require("react");

class fileEdit extends React.Component {
    render() {
        var fileDate = new Date(this.props.file.date).toISOString().slice(0, 10);
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
            <a href={"/vet/home/" + this.props.file.vet_id}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Edit File</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/vet/file/" + this.props.file.id + "?_method=PUT"}>
            <table>
            <tr><td>File:</td><td><input className="formField" name="name" type="text" defaultValue={this.props.file.name} /></td></tr>
            <tr><td>Date:</td><td><input className="formField" name="date" type="date" defaultValue={fileDate} /></td></tr>
            <tr><td>Pet ID:</td><td><input className="formField" name="pet_id" type="text" defaultValue={this.props.file.id} /></td></tr>
            <input name="id" type="hidden" value={this.props.file.id} />
            </table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = fileEdit;