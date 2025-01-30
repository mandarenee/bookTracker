import React, {useState, useEffect } from 'react'
import Star from '../Books/RatingStar'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { withStyles } from '@material-ui/core/styles'

const styles = {
    bookContainer:{
        width: '1200px',
        maxWidth: '90%',
        margin: '0 auto',
        padding: '3% 0'
    },
    bookTitle:{
        fontSize: 'clamp(18px, 6vw, 42px)',
        margin: '0 0 0 8px'
    },
    bookAuthor:{
        fontSize: 'clamp(18px, 3.7vw, 30px)',
        margin: '0 0 0 8px'
    },
    bookRating: {
        display: 'flex',
        width:'clamp(200px, 50vw, 340px)'
    },
}

const Book = (props) => {
    const [book, setBook] = useState({})
    const [rating, setRating] = useState({})
    const { classes } = props

    const params = useParams()
    const bookId = params.id

    useEffect(() => {
        console.log('bookId', bookId)
        const url = `/api/v1/books/${bookId}`

        axios.get(url)
        .then( resp => {setBook(resp.data.data.attributes)})
        .catch( resp => console.log(resp) )
    }, [])

    const totalStars = 5;
    const stars = [...Array(totalStars)].map((item, index) => <Star className="stars" key={index} isFilled={index < book.rating_score}/>)

    return (
        <div className={ classes.bookContainer }>
            <h2 className={ classes.bookTitle }>{ book.name }</h2>
            <h3 className={ classes.bookAuthor }>{ book.author }</h3>
            <div className={ classes.bookRating }>{ stars }</div>
        </div>
    )
}

export default withStyles(styles)(Book)