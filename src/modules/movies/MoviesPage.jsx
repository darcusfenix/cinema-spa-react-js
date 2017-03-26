import React, {Component} from "react";
import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";

export default class MoviesPage extends Component {

    constructor(props, context) {

        super(props, context);

    }

    render() {

        const styles = {
            root: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            },
            gridList: {
                width: 300,
                height: 400,
                overflowY: "auto",
            },
        };

        const tilesData = [
            {
                title: "Breakfast",
                author: "jill111",
                img: "http://lorempixel.com/400/401/"
            },
            {
                title: "Tasty burger",
                author: "pashminu",
                img: "http://lorempixel.com/400/402/"
            },
            {
                title: "Camera",
                author: "Danson67",
                img: "http://lorempixel.com/400/403/"
            },
            {
                title: "Morning",
                author: "fancycrave1",
                img: "http://lorempixel.com/400/404/"
            },
            {
                title: "Hats",
                author: "Hans",
                img: "http://lorempixel.com/400/405/"
            },
            {
                title: "Honey",
                author: "fancycravel",
                img: "http://lorempixel.com/400/406/"
            },
            {
                title: "Vegetables",
                author: "jill111",
                img: "http://lorempixel.com/400/407/"
            },
            {
                title: "Water plant",
                author: "BkrmadtyaKarki",
                img: "http://lorempixel.com/400/408/"
            },
        ];


        return <div className="row" style={{"margin": "0", "padding": "0"}}>
            {tilesData.map((tile, i) => (

                <div key={i + "qweas"} className="col-sm-6 col-md-3 col-xs-12" style={{"textAlign": "center", "padding": "0", "margin": "0"}}>
                    <GridTile
                        key={i + "dasads"}
                        title={tile.title}
                        cols={1}
                        rows={1}
                        subtitle={<span>by <b>{tile.author}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white"/></IconButton>}>
                        <img src={tile.img}/>
                    </GridTile>
                </div>
            ))}
        </div>;

    }

}

MoviesPage.propTypes = {};
