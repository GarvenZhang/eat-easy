import { GoodsInfo } from './GoodsInfo';

export interface Message {
    messageId: number;
    goodsInfo: GoodsInfo
    praiseNum: number;
    commentNum: number;
}