var React = require("react");

class TryAgain extends React.Component {
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
            <a className="navbar-brand" href="/">
            <img src="/images/logo_new.png" class="d-inline-block align-top" alt="" />
            </a>
            <a href="/logout"><button className="btn btn-warning navbar-btn" type="button">Logout</button></a>
            </nav>
            <div className="row" id="main">
            <div className="col-sm-12">
            <h2>Please try again.</h2>
            </div>
            </div>
            </div>
            <footer className="fixed-bottom">
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

module.exports = TryAgain;