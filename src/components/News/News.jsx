import React from 'react';
import NewsPost from "./NewsPost";
import {Grid} from '@material-ui/core'

let News = (props) => {
    const { newsData } = props;
    let newsElement = newsData.map(news => <NewsPost 
        key={news.title}
        image ={news.urlToImage}
        author ={news.author} 
        title={news.title} 
        description={news.description}
        toInfo = {news.url} 
        dataPub ={news.publishedAt}
        content ={news.content}/>);
    
    return (
    <Grid container justify='space-around'>{newsElement}</Grid>
    )
}

export default News; 