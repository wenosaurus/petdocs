var React = require("react");

class fileDelete extends React.Component {
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
            <h2>Delete File</h2>
            </nav>
            <main>
            <p>Are you sure you want to delete {this.props.file.name}?</p>
            <form className="form" method="POST" action={"/vet/file/delete/" + this.props.file.id + "?_method=DELETE"}>
            <p><input className="formButton" type="submit" value="Yes" /></p>
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

module.exports = fileDelete;