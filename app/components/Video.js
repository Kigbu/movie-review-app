import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = ({ onClose, navigation }) => {
    return (
        <VideoPlayer
            source={{
                uri: 'https://vjs.zencdn.net/v/oceans.mp4',
            }}
            onBack={() => onClose()}
            onEnd={() => onClose()}
            fullScreenOrientation="all"
            navigator={navigation}
            toggleResizeModeOnFullscreen={true}
            tapAnywhereToPause={true}
        />
    );
};

export default Video;
