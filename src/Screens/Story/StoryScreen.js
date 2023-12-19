import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Story from '../../Components/Story/Story';
import NewStory from '../../Components/Story/NewStory';
export default function StoryScreen() {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>StoryScreen</Text>
          {/* <Story /> */}
          <NewStory />
        </View>
      </SafeAreaView>
    </>
  );
}
