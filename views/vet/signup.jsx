var React = require("react");

class NewVet extends React.Component {
    render() {
        return (
            <html>
            <head />
            <body>
            <h1>Vet Signup</h1>
            <div>
            <form className="form" method="POST" action="/vet">
            <p>E-mail: <input className="formField" name="email" type="text" onInvalid="alert('Please fill out this field.');" required /></p>
            <p>Password: <input className="formField" name="password" type="text" onInvalid="alert('Please fill out this field.');" required /></p>
            <input className="formButton" type="submit" value="Submit" />
            </form>
            </div>
            </body>
            </html>
            );
    }
};

module.exports = NewVet;
