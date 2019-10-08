import {formatStringToNumber} from './formatValues';

const getSum = (investments) => investments.reduce((sum, cur) => sum + formatStringToNumber(cur.value), 0)

const getSumByType = (type, investments) => {
    return investments.reduce((sum, cur) => cur.type === type ? sum + formatStringToNumber(cur.value) : sum, 0);
}

const getPercentageByType = (type, total, investments) => {
    return Number((100 * getSumByType(type, investments) / total).toFixed(2));
}

export { getPercentageByType, getSum }