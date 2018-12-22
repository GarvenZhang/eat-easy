import { UserInfo } from './user';

export interface Reply {
    replyId: number;
    replyContent: string;
    userInfo: UserInfo;
}