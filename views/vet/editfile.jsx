var React = require("react");

class fileEdit extends React.Component {
    render() {
        var fileDate = new Date(this.props.file.date).toISOString().slice(0, 10);
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
            <h2>Edit File</h2>
            </nav>
            <main>
            <form className="form" method="POST" action={"/vet/file/" + this.props.file.id + "?_method=PUT"}>
            <p>File: <input className="formField" name="name" type="text" defaultValue={this.props.file.name} /></p>
            <p>Date:<input className="formField" name="date" type="date" defaultValue={fileDate} /></p>
            <p>Pet ID: <input className="formField" name="pet_id" type="text" defaultValue={this.props.file.id} /></p>
            <input name="id" type="hidden" value={this.props.file.id} />
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            <aside>
            <p><a href={"/vet/home/" + this.props.file.vet_id}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = fileEdit;