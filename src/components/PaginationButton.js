import React from 'react';

const PaginationButton = ({ to, onClick, children }) => (
    to ? (
        <div className="column has-text-centered">
            <a className="button" href="#point" onClick={onClick}>
                {children}
            </a>
        </div>
    ) : (
            ""
        )
)

export default PaginationButton;