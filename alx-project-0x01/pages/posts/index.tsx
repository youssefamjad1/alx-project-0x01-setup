import React, { useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import { PostProps, PostData } from "@/interfaces";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState<PostData[]>(initialPosts);
  const [post, setPost] = useState<PostData | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setPost(null);
  };

  const handleSubmit = (newPost: PostData) => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, id: prevPosts.length + 1 }]);
    closeModal();
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={openModal}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {posts?.map(({ title, body, userId, id }: PostData, key: number) => (
            <PostCard title={title} body={body} userId={userId} id={id} key={key} />
          ))}
        </div>

        <PostModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostData[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
