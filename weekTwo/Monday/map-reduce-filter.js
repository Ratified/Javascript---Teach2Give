const users = [
    {
      id: 1,
      name: 'Alice',
      location: 'New York',
      friends: [2, 3],
      posts: [
        { content: 'Had a great day!', timestamp: '2024-09-10T10:30:00', likes: 15 },
        { content: 'Loving the weather!', timestamp: '2024-09-12T09:00:00', likes: 5 }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      location: 'Los Angeles',
      friends: [1],
      posts: [
        { content: 'Check out my new blog post!', timestamp: '2024-09-05T14:00:00', likes: 20 },
        { content: 'Going for a run!', timestamp: '2024-09-14T16:30:00', likes: 8 }
      ]
    },
    {
      id: 3,
      name: 'Charlie',
      location: 'Chicago',
      friends: [1],
      posts: [
        { content: 'Enjoying the weekend!', timestamp: '2024-09-01T12:00:00', likes: 50 }
      ]
    },
    {
      id: 4,
      name: 'Diana',
      location: 'San Francisco',
      friends: [],
      posts: []
    }
];
  
function analyzeUserData(users) {
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  
    const activeUsers = users.filter(user => 
      user.posts.some(post => new Date(post.timestamp).getTime() >= oneWeekAgo)
    );
  
    const popularPosts = activeUsers.map(user => ({
      userId: user.id,
      posts: user.posts.filter(post => post.likes >= 10 && new Date(post.timestamp).getTime() >= oneWeekAgo)
    })).filter(user => user.posts.length > 0); 
  
    const totalLikes = popularPosts.reduce((acc, user) => {
      const userLikes = user.posts.reduce((sum, post) => sum + post.likes, 0);
      return acc + userLikes;
    }, 0);
  
    const totalPopularPosts = popularPosts.reduce((count, user) => count + user.posts.length, 0);
    
    const averageLikesPerUser = popularPosts.length > 0 
      ? totalLikes / popularPosts.length 
      : 0;
  
    return {
      activeUsersCount: activeUsers.length,
      totalPopularPosts,
      averageLikesPerUser
    };
  }
  

console.log(analyzeUserData(users)) 