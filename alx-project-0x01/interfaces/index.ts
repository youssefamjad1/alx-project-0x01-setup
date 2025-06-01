export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// interfaces/index.ts
export interface UserProps {
  username: string;
  street: string;
  catchPhrase: string;
}

export interface PostData {
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
