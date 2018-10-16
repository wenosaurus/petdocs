var React = require("react");

class OwnerHome extends React.Component {
    render() {
        let petList = this.props.pet.map(item => {
            return <tr><td>{item.name}</td> <td><a href={"/owner/pet/files/" + item.id}>Files</a></td> <td><a href={"/owner/pet/" + item.id + "/edit"}>Edit</a></td> <td><a href={"/owner/pet/" + item.id + "/delete"}>Delete</a></td></tr>;
        })
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
            <a href="/"><img src="/images/logo.png" /></a>
            </div>
            <div className='login'>
            <span className='loginButton'><a href="/logout">Logout</a></span>
            </div>
            </header>
            <main>
            <table className='showList'>
            <tr>
            <td><h4>Pet Name</h4></td>
            <td></td>
            <td></td>
            <td></td></tr>
            {petList}
            </table>
            <p><a href="/owner/pet">Add Pet</a></p>
            <p><a href={"/owner/" + this.props.id + "/edit"}>Account Settings</a></p>
            <p><a href="/logout">Logout</a></p>
            </main>
            </body>
            </html>
            );
    }
};

module.exports = OwnerHome;