import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
                // video: {
                //     resolution: this.state.settings.video.resolution
                // }
            }
        })
    } 

    handleClickReso = () => {
        this.setState({
            settings: {
                ...this.state.settings,
               

                // bitrate: this.state.settings.bitrate,
                video: {
                    resolution: '720p'
                }
            }
        })
        
    }

    render() {
         
        return <div>
            <button onClick={this.handleClick}>{this.state.settings.bitrate}</button>
            <button onClick={this.handleClickReso}>{this.state.settings.video.resolution}</button>
            
        </div>
    }
}

export default YouTubeDebugger