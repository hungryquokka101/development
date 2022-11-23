import "../styles/PlushieItem.css"
import { useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PlushieItem(props) {
    const [count, setCount] = useState(0) // keep track of the count of current item

    const handleButtonAddCart = e => {
        e.preventDefault()
        setCount(count + 1)
        props.addToCart(props.item.name, props.item.price)
    }

    const handleButtonRemoveCart = e => {
        e.preventDefault()
        setCount(count - 1)
        props.removeFromCart(props.item.name, props.item.price)
    }

    return (
        // CITATION: card component from material UI: https://mui.com/material-ui/react-card/
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="350"
                image={props.item.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                Size: {props.item.size}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                Price: ${props.item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={handleButtonAddCart}>Add to Cart</Button>
                <Button size="large" onClick={handleButtonRemoveCart}>Remove from Cart</Button>
            </CardActions>
        </Card>
    )
}
