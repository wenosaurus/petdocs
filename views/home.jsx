var React = require("react");

class NewOwner extends React.Component {
    render() {
        return (
            <html lang="en">
            <head>
            <title>PetDocs</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="/main.css" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
            </head>
            <body>
            <div className="container">
            <nav className="navbar navbar-light">
            <a className="navbar-brand" href="#">
            <img src="/images/logo_new.png" class="d-inline-block align-top" alt="" />
            </a>
            <a href="/vet/login"><button className="btn btn-warning navbar-btn" type="button">Vet Login</button></a>
            </nav>
            <div className="row" id="main">
            <div className="col-sm-8">
            <h1>Get all your pet's records in one place</h1>
            <p><br />
            <table>
            <tr><td>
            <a href="/owner/login"><button className='btn btn-primary'>Login</button></a>
            </td>
            <td>
            <a href="/owner/signup"><button className='btn btn-warning'>Signup</button></a>
            </td></tr>
            </table>
            </p>
            </div>
            <div className="col-sm-4">
            <img src="images/sidephone.png" align="right" id="frontImage" />
            </div>
            </div>
            <div className="row">
            <div className="col-sm-12" align="center" id="middle">
            <div className="scrolldown">
            <a href="#"><i className="fa fa-chevron-down"></i></a>
            </div>
            </div>
            </div>
            </div>
            <aside>
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
            <h3>For Vets</h3>
            <p><a href="/vet/login">Vet Login</a></p>
            <p><a href="/vet/signup">Vet Signup</a></p>
            </div>
            </div>
            </div>
            </aside>
            <footer>
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
            <p>
            <strong>
            <a href="/">Home</a> | <a href="mailto:contact@wenvo.tech">Contact</a> | <a href="/privacy">Privacy Policy</a></strong>
            </p>
            <hr />
            <p>
            2018 Made with <i className="fa fa-heart"></i> By <a href="http://www.wenvo.tech">WenVo.Tech</a>
            </p>
            </div>
            </div>
            </div>
            </footer>
            </body>
            </html>
        );
    }
};

module.exports = NewOwner;