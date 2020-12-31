import { Message } from '../_types';

interface Post {
  title: string;
  body: string;
  like_counts: number;
  postStatus: number;
}

const addPost = (post: Post, callback: (err: any | Message, data?: Message) => void) => {};
