var React = require("react");

class NewPet extends React.Component {
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
            <h2>Add your pet</h2>
            </nav>
            <main>
            <form className="form" method="POST" action="/pet">
            <p>Pet Name: <input className="formField" name="name" type="text" required /></p>
            <p>Type of Animal: <select className="formSelect" name="type" required>
            <option className="formOption" value="other" selected>other</option>
            <option className="formOption" value="dog">dog</option>
            <option className="formOption" value="cat">cat</option>
            </select></p>
            <p>Gender: <select className="formSelect" name="gender" required>
            <option className="formOption" value="unsure" selected>unsure</option>
            <option className="formOption" value="male">male</option>
            <option className="formOption" value="female">female</option>
            </select></p>
            <p>Birthdate:<input className="formField" name="birthdate" type="date" /></p>
            <p>Weight:<input className="formField" name="weight" type="text" value="kg" /></p>
            <p>Upload Photo: <input className="formField" name="img" type="text" /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </main>
            <aside>
            <p><a href={"/owner/home/" + this.props.id}>Home</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = NewPet;