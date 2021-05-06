import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref([]);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      
      if (!data.ok) {
        throw new Error('No data available');
      }

      posts.value = await data.json();

    } catch(e) {
      error.value = e.message;
      console.log(error.value);
    }
  }

  return { posts, error, load }
}

export default getPosts;