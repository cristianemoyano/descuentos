import React from "react";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

import {ITEM_CARD_COMPONENT_TEXTS} from './constants'

export const ItemCard = ({item, onView}) => {
    return (
        <Card>
            <CardImg
                src={item.commerce_address.commerce.logo_url}
                alt={item.commerce_address.commerce.title}
            />
            <CardBody>
                <CardTitle>{item.commerce_address.commerce.title}</CardTitle>
                <CardSubtitle>{item.title}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="success" onClick={() => onView(item)}>
                    {ITEM_CARD_COMPONENT_TEXTS.view}
                </Button>
            </CardBody>
        </Card>
    );
}