import {View, Text} from 'react-native';
import React from 'react';
import InstagramStories from '@birdwingo/react-native-instagram-stories';

const NewStory = () => {
  const stories = [
    {
      id: 'user1',
      name: 'M Awais',
      imgUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
      stories: [
        {
          id: 'story1',
          sourceUrl:
            'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        },
        {
          id: 'story2',
          sourceUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          mediaType: 'video',
        },
      ],
    },
  ];

  return (
    <View>
      <InstagramStories stories={stories} />
    </View>
  );
};

export default NewStory;
