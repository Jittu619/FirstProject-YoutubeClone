import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core'
import FirstLoad from './FirstLoad'

const VideoDetails = ({ video }) => {
    if (!video) return <FirstLoad />

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{video.snippet.title}</Typography>
                <Typography variant="subtitle1"><b>Created by :-</b>  {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2"><i>Posted on:- </i>{video.snippet.publishedAt}<br />{video.snippet.description}</Typography>
            </Paper>
        </Fragment>
    );
}
export default VideoDetails;
