// noinspection NonAsciiCharacters
export interface KeyboardCarType {
  switchShow: (setShow?: boolean) => void;
}

export interface Item {
  type: 'value' | 'lock' | 'delete',//普通值,收起键盘,删除
  key: string,
}

//编号
export const keyData: Item[][] = [
  [
    { type: 'value', key: '1' },
    { type: 'value', key: '2' },
    { type: 'value', key: '3' },
    { type: 'value', key: '4' },
    { type: 'value', key: '5' },
    { type: 'value', key: '6' },
    { type: 'value', key: '7' },
    { type: 'value', key: '8' },
    { type: 'value', key: '9' },
    { type: 'value', key: '0' },
  ],
  [
    { type: 'value', key: 'Q' },
    { type: 'value', key: 'W' },
    { type: 'value', key: 'E' },
    { type: 'value', key: 'R' },
    { type: 'value', key: 'T' },
    { type: 'value', key: 'Y' },
    { type: 'value', key: 'U' },
    { type: 'value', key: 'I' },
    { type: 'value', key: 'O' },
    { type: 'value', key: 'P' },
  ], [
    { type: 'value', key: 'A' },
    { type: 'value', key: 'S' },
    { type: 'value', key: 'D' },
    { type: 'value', key: 'F' },
    { type: 'value', key: 'G' },
    { type: 'value', key: 'H' },
    { type: 'value', key: 'J' },
    { type: 'value', key: 'K' },
    { type: 'value', key: 'L' },
  ], [
    { type: 'value', key: 'Z' },
    { type: 'value', key: 'X' },
    { type: 'value', key: 'C' },
    { type: 'value', key: 'V' },
    { type: 'value', key: 'B' },
    { type: 'value', key: 'N' },
    { type: 'value', key: 'M' },
    { type: 'delete', key: '' },
  ],
];
// 简称
export const abbreviation: Item[][] = [
  [
    { type: 'value', key: '京' },
    { type: 'value', key: '津' },
    { type: 'value', key: '沪' },
    { type: 'value', key: '渝' },
    { type: 'value', key: '苏' },
    { type: 'value', key: '浙' },
    { type: 'value', key: '豫' },
    { type: 'lock', key: '' },
  ], [
    { type: 'value', key: '粤' },
    { type: 'value', key: '川' },
    { type: 'value', key: '陕' },
    { type: 'value', key: '冀' },
    { type: 'value', key: '辽' },
    { type: 'value', key: '吉' },
    { type: 'value', key: '皖' },
    { type: 'value', key: '闽' },
  ], [
    { type: 'value', key: '鄂' },
    { type: 'value', key: '湘' },
    { type: 'value', key: '鲁' },
    { type: 'value', key: '晋' },
    { type: 'value', key: '黑' },
    { type: 'value', key: '赣' },
    { type: 'value', key: '贵' },
    { type: 'value', key: '甘' },
  ], [
    { type: 'value', key: '桂' },
    { type: 'value', key: '琼' },
    { type: 'value', key: '云' },
    { type: 'value', key: '青' },
    { type: 'value', key: '蒙' },
    { type: 'value', key: '藏' },
    { type: 'value', key: '宁' },
    { type: 'value', key: '新' },
  ],
];

