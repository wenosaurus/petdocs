var React = require("react");

class fileNew extends React.Component {
    render() {
        console.log(this.props.id);
        let today = new Date().toISOString().substr(0, 10);
        console.log(today);
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
            <a href={"/vet/home/" + this.props.id}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Add File</h2>
            </nav>
            <main>
            <form className="form" method="POST" action="/file">
            <table><tr><td>
            Upload File:</td><td><input className="formField" name="name" type="text" required /></td></tr>
            <tr><td>Pet ID:</td><td> <input className="formField" name="pet_id" type="text" required /></td></tr>
            <tr><td>Date:</td><td><input className="formField" name="date" type="date" value={today} /></td></tr>
            <input name="vet_id" type="hidden" value={this.props.id} />
            </table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = fileNew;