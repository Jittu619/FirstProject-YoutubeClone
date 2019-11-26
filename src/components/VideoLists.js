import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoLists = ({ videos, onVideoSelect }) => {
    const listofVideos = videos.map((video, id) => { return <VideoItem onSelectVideo={onVideoSelect} key={id} video={video} /> });
    return (
        <Grid container spacing={10}>
            {listofVideos}
        </Grid>
    );

}
export default VideoLists;