import React, {useState, useEffect } from 'react'
import Star from './RatingStar'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    bookContainer: {
        padding: '20px',  
    },
    bookLabel:{
        fontSize: '16px',
        fontStyle: 'italic',
        margin: '12px 0 0 0',

    },
    bookTitle:{
        fontSize: 'clamp(20px, 2vw, 36px)',
        margin: '0 0 0 8px'
    },
    bookAuthor:{
        fontSize: 'clamp(18px, 1.7vw, 30px)',
        margin: '0 0 0 8px'
    },
    bookRating:{
        display: 'flex',
        margin: '0 0 0 8px',
    }
}

const BookItem = (props) => {
    const { name, author, rating_score } = props.attributes
    const { classes } = props

    const totalStars = 5;
    const stars = [...Array(totalStars)].map((item, index) => <Star className="stars" key={index} isFilled={index < rating_score}/>)

    return (
        <li className={ classes.bookContainer }>
            <div className="book-title">
                <p className={ classes.bookLabel }>Title</p> 
                <p className={ classes.bookTitle }>{ name }</p>
            </div>
            <div className="book-author">
                <p className={ classes.bookLabel }>Author</p> 
                <p className={ classes.bookAuthor }>{ author }</p>
            </div>
            <div className="rating-score">
                <p className={ classes.bookLabel }>Rating</p> 
                <p className={ classes.bookRating }>{ stars }</p>

            </div>
        </li>
    )
}

export default withStyles(styles)(BookItem)