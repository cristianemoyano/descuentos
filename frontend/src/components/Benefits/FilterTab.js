import React from "react";
import {FILTER_TAB_COMPONENT_TEXTS} from './constants'

export const FilterTab = ({viewCompleted, displayCompleted}) => {
    return (
        <div className="my-5 tab-list">
            <span
                onClick={() => displayCompleted(true)}
                className={viewCompleted ? "active" : ""}
            >
                {FILTER_TAB_COMPONENT_TEXTS.complete}
            </span>
            <span
                onClick={() => displayCompleted(false)}
                className={viewCompleted ? "" : "active"}
            >
                {FILTER_TAB_COMPONENT_TEXTS.incomplete}
            </span>
        </div>
    );
}
