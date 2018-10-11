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
            </head>
            <body>
            <header>
            <h1>PetDocs</h1>
            </header>
            <nav>
            <h2>Add File</h2>
            </nav>
            <main>
            <form className="form" method="POST" action="/file">
            <p>Upload File: <input className="formField" name="name" type="text" required /></p>
            <p>Pet ID: <input className="formField" name="pet_id" type="text" required /></p>
            <p>Date:<input className="formField" name="date" type="date" value={today} /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            <aside>
            <p><a href={"/vet/home/" + this.props.id}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = fileNew;