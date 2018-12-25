import cookie from './cookie';
import Type from '../../mock/type.json';
import Comment from '../../mock/comment.json';
import Nori from '../../mock/nori.json';
import Chips from '../../mock/chips.json';
import Chocolate from '../../mock/chocolate.json';
import Nut from '../../mock/nut.json';
import Biscuits from '../../mock/biscuits.json';

const typeData = Type.data;

// 商品数据
const goodsData = {
    biscuits: Biscuits.data,
    nori: Nori.data,
    chips: Chips.data,
    chocolate: Chocolate.data,
    nut: Nut.data
};


export function getMessageListByType(typeId, len) {
    let msgData = getGoodsDataById(typeId, len);

    msgData = msgData.map((item, index) => {
        return {
            messageId: index + 1,
            goods: item,
            user: {
                username: "小明",
                userLogoSrc: "/src/assets/imgs/userLogo.jpg",
            },
            praiseNum: Math.ceil(Math.random() * 100),
            commentNum: Math.ceil(Math.random() * 100),
            commentData: Comment.data
        };
    })

    return msgData;
}

export function saveMsgDataByCookie(data) {
    const MAXAGE = 1000 * 60 * 24 * 7;
    cookie.set('msgData', JSON.stringify(data), {
        maxAge: MAXAGE
    });
}

export function getMsgData() {
    return JSON.parse(cookie.get('msgData'))
}

/**
 * 获取首页数据
 */
export async function getIndexMessageListByType() {
    const hasChosenType = cookie.get('hasChosenType');
    let typeIdArr = []
    let msgData = [];


    if (hasChosenType == 1) {
        typeIdArr = cookie.get('firstChoiceType').split(',');
    } else {
        typeIdArr = [2, 5]
    }


    for (let id of typeIdArr) {

        const data = await getGoodsDataById(parseInt(id), 5);

        msgData.push(...data);
    }


    msgData = msgData.map((item, index) => {
        return {
            messageId: index + 1,
            goods: item,
            user: {
                username: "小明",
                userLogoSrc: "/src/assets/imgs/userLogo.jpg",
            },
            praiseNum: Math.ceil(Math.random() * 100),
            commentNum: Math.ceil(Math.random() * 100),
            commentData: Comment.data
        };
    })

    return msgData;
}

/**
 * 根据id获取商品类型
 */
export function getGoodsDataById(id, len) {
    const filterType = typeData.filter((item) => {
        return item.id === id;
    })

    const type = filterType[0].alia;

    const data = goodsData[type];

    for (let item of data) {
        item.typeId = id;
        item.goodsPrice = Math.ceil(Math.random() * 100)
    }

    if (len) {
        len = len > data.length ? data.length : len;
    } else {
        len = data.length;
    }


    return data.slice(0, len);
}
