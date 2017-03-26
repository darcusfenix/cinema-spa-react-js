import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";

const entry = [path.resolve(__dirname, "src/index.es6")],
    extensions = [".js", ".es6", ".json", ".jsx"],
    output = {
        "path": path.resolve(__dirname, "dist"),
        "publicPath": "/",
        "filename": "bundle.js"
    },
    rules = [
        {"test": /\.(es6|jsx)$/, "exclude": /node_modules/, "use": "babel-loader"},
        {"test": /\.jpg$/, "use": ["file-loader"]},
        {"test": /(\.css)$/, "use": ["style-loader", "css-loader"]}
    ];

export default {
    "entry": entry,
    "output": output,
    "module": {
        "rules": rules
    },
    "resolve": {
        "extensions": extensions
    },
    "devtool": "source-map",
    "plugins": [
        /**
         *  new HtmlWebPackPlugin({
            "template": "src/index.html",
            "minify": {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            "inject": true,
            "cache": false
        })
         */
    ]
};
