import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails'
import VideoLists from './components/VideoLists'

class App extends Component {

    state = {
        video: [],
        selectedVideo: null
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResult: 5,
                key: 'AIzaSyBKIWDZObyCIOGJQBeI_2QGt5KgJFMnrnI',
                q: searchTerm
            }
        });

        this.setState({ video: response.data.items, selectedVideo: response.data.items[1] });
    }

    onSelectVideo = (video) => {
        this.setState({ selectedVideo: video });
    }
    render() {
        const { selectedVideo, video } = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoLists videos={video} onVideoSelect={this.onSelectVideo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App;