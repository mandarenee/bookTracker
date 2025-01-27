import React, {useState, useEffect } from 'react'
import BookItem from './BookItem'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    booksContainer: {
        "& li:first-child": {
            background: 'var(--color-1)',
            color: 'var(--off-white)',
            fill: 'var(--off-white)'
        },
        "& li:nth-child(2)": {
            background: 'var(--off-white)',
            fill: 'var(--color-4)'
        },
        "& li:nth-child(3)": {
            background: 'var(--color-2)',
        },
        "& li:nth-child(4)": {
            background: 'var(--color-4)',
        },
        "& ul": {
            display: 'flex',
            gap: '12px',
            listStyle: 'none'
        }
    },
}

const Books = (props) => {
    const [books, setBooks] = useState([]);
    const { classes } = props

    useEffect(() => {
        axios.get('/api/v1/books.json')
        .then( resp => {
            setBooks(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [books.length])

    const book_list = books.map( book => {
        return (
            <BookItem 
                key={ book.attributes.name }
                attributes={ book.attributes }
            />
        )
    })

    return (
        <div className={ classes.booksContainer }>
            <h1>Books</h1>
            <ul>{book_list}</ul>
        </div>
    )
}

export default withStyles(styles)(Books)