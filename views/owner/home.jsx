var React = require("react");

class OwnerHome extends React.Component {
    render() {
        console.log('THIS PROPS' + this.props.pet[0].owner_id);
        let petList = this.props.pet.map(item => {
            return <li>{item.name} | <a href={"/owner/pet/" + item.id + "/edit"}>Edit</a> | <a href={"/owner/pet/" + item.id + "/delete"}>Delete</a></li>;
        })
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
            Search
            </nav>
            <main>
            <ul>
            {petList}
            </ul>
            <p><a href="/owner/pet">Add Pet</a></p>
            </main>
            <aside>
            <p><a href={"/owner/" + this.props.pet[0].owner_id + "/edit"}>Account Setting</a></p>
            <p><a href="/logout">Logout</a></p>
            </aside>
            </body>
            </html>
            );
    }
};

module.exports = OwnerHome;