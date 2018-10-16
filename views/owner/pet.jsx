var React = require("react");

class NewPet extends React.Component {
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
            <a href={"/owner/home/" + this.props.id}><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <nav>
            <h2>Add your pet</h2>
            </nav>
            <main>
            <form className="form" method="POST" action="/pet">
            <table>
            <tr><td>Pet Name:</td><td><input className="formField" name="name" type="text" required /></td></tr>
            <tr><td>Type of Animal:</td>
            <td><select className="formSelect" name="type" required>
            <option className="formOption" value="other" selected>other</option>
            <option className="formOption" value="dog">dog</option>
            <option className="formOption" value="cat">cat</option>
            </select></td></tr>
            <tr><td>Gender:</td><td> <select className="formSelect" name="gender" required>
            <option className="formOption" value="unsure" selected>unsure</option>
            <option className="formOption" value="male">male</option>
            <option className="formOption" value="female">female</option>
            </select></td></tr>
            <tr><td>Birthdate:</td><td><input className="formField" name="birthdate" type="date" /></td></tr>
            <tr><td>Weight:</td><td><input className="formField" name="weight" type="text" value="kg" /></td></tr>
            <tr><td>Upload Photo:</td><td> <input className="formField" name="img" type="text" /></td></tr>
            <input name="owner_id" type="hidden" value={this.props.id} />
            </table>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = NewPet;