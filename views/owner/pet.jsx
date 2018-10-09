var React = require("react");

class NewPet extends React.Component {
    render() {
        return (
            <html>
            <head>
            </head>
            <body>
            <h1>Add your pet</h1>
            <div>
            <form className="form" method="POST" action="/pet">
            <p>Pet Name: <input className="formField" name="name" type="text" onInvalid="alert('Please fill out this field.');" required /></p>
            <p>Type: <input className="formField" name="type" type="text" onInvalid="alert('Please fill out this field.');" required /></p>
            <p>Gender:<input className="formField" name="gender" type="text" onInvalid="alert('Please fill out this field.');" required /></p>
            <p>Birthdate:<input className="formField" name="birthdate" type="date" /></p>
            <p>Weight:<input className="formField" name="weight" type="text" /></p>
            <p>Upload Photo: <input className="formField" name="img" type="text" /></p>
            <p><input className="formButton" type="submit" value="Submit" /></p>
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = NewPet;