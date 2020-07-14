import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            <div>
                {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
                {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
            </div>
        </div>
    )
}