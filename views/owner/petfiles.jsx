var React = require("react");

class OwnerHome extends React.Component {
    render() {

        let fileList = this.props.file.map(item => {
            var fileDate = new Date(item.date).toISOString().slice(0, 10);
            return <li>{fileDate} | {item.name}</li>;
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
            {fileList}
            </ul>
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

module.exports = OwnerHome;