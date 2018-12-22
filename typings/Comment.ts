import { UserInfo } from './User';

export interface Comment {
    commentId: number;
    commentContent: string;
    commentTime: number;
    userInfo: UserInfo
}