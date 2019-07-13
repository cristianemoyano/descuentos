import React from "react";
import {ITEM_CARD_COMPONENT_TEXTS} from './constants'

export const ItemCard = ({item, viewCompleted, onEdit, onDelete}) => {
    return (
        <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <span
                className={`todo-title mr-2 ${
                    viewCompleted ? "completed-todo" : ""
                }`}
                title={item.description}
            >
                {item.title}
            </span>
            <span>
                <button
                    onClick={() => onEdit(item)}
                    className="btn btn-secondary mr-2"
                >
                    {ITEM_CARD_COMPONENT_TEXTS.edit}
                </button>
                <button
                    onClick={() => onDelete(item)}
                    className="btn btn-danger"
                >
                    {ITEM_CARD_COMPONENT_TEXTS.delete}
                </button>
            </span>
        </li>
    );
}
