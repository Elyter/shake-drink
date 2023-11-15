import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const CommunityScreen = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handleAddPost = () => {
        if (newPost.trim() !== '') {
            setPosts([...posts, newPost]);
            setNewPost('');
        }
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <TextInput
                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
                placeholder="Write a new post"
                value={newPost}
                onChangeText={setNewPost}
            />
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginBottom: 10 }}
                onPress={handleAddPost}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Add Post</Text>
            </TouchableOpacity>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default CommunityScreen;
