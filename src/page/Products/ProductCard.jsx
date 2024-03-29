import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NoImage from "../../assets/img/src/no_image.png";
import { push } from "connected-react-router";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreVert } from "@material-ui/icons";
import { deleteProduct } from "../../store/product/product.operation";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 8,
      width: "calc(50% - 16px)"
    },
    [theme.breakpoints.up("sm")]: {
      margin: 16,
      width: "calc(33.333% - 32px)"
    }
  },
  content: {
    display: "flex",
    padding: "16px 8px",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: 16
    }
  },
  media: {
    height: 0,
    paddingTop: "100%"
  },
  price: {
    color: theme.palette.secondary.main,
    fontSize: 16
  }
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEL] = useState(null);

  const handleClick = (event) => {
    setAnchorEL(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEL(null);
  };

  const images = props.images.length > 0 ? props.images : [{ path: NoImage }];
  const price = props.price.toLocaleString();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={images[0].path}
        title=""
        onClick={() => dispatch(push("/product/edit/" + props.id))}
      ></CardMedia>
      <CardContent className={classes.content}>
        <div>
          <Typography color="textSecondary" component="p">
            {props.name}
          </Typography>
          <Typography className={classes.price} component="p">
            ¥{price}
          </Typography>
        </div>
        <IconButton onClick={handleClick}>
          <MoreVert></MoreVert>
        </IconButton>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              dispatch(push("/product/edit/" + props.id));
              handleClose();
            }}
          >
            編集する
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(deleteProduct(props.id));
              handleClose();
            }}
          >
            削除する
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
