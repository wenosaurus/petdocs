var React = require("react");

class petDelete extends React.Component {
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
            <h2>Delete {this.props.pet.name}</h2>
            </nav>
            <main>
            <p>Are you sure you want to delete {this.props.pet.name}?</p>
            <form className="form" method="POST" action={"/pet/file/delete/" + this.props.pet.id + "?_method=DELETE"}>
            <p><input className="formButton" type="submit" value="Yes" /></p>
            </form>
            </main>
            </body>
            <aside>
            <p><a href={"/owner/home/" + this.props.pet.owner_id}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </html>
        );
    }
};

module.exports = petDelete;