import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC0Wu2uRuQm716v9raq6eaCqEx4J5dWigU';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  videos: [],
                  selectedVideo: null
                  };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
                      videos:videos,
                      selectedVideo: videos[0]
                     });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo: selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}




// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

ReactDOM.render(<App />, document.querySelector('.container'));
