export namespace Random {
  /**
   * Gets a random string with the given length, if length is undefiend the length will be 7.
   * @param length maximun posible Number.
   */
  export function String(length = 7) {
    let temp = '';
    for (let i = 0; i < length / 8; i++) {
      temp = temp.concat(((Math.random() + 3 * Number.MIN_VALUE) / Math.PI).toString(36).slice(i + 1 <= length / 8 ? -8 : -(length % 8)));
    }
    return temp;
  }
  /**
   * Gets a random integer within the given Range, if max is undefiend max will be 10000.
   * @param max maximun posible Number.
   */
  export function IntNumber(max = 10000) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /**
   * Generate a random object.
   * @param keyNum number of items in the object.
   * @param itemContent an array that defines the content of each item.
   * @param itemType the type of the item.
   */
  export function Object(
    keyNum = 10,
    itemType: IType = 'string',
    customItem?: any,
    itemContent: IRandomItem[] = [['ascending'], ['literal', ' - String Data: '], ['randomString'], ['randomNumber']],
    options = { keyLength: 6, useIndexAsKey: false, randomStringLength: 10, randomNumberLength: 100000 }
  ) {
    let tempObj: { [x: string]: any } = {};
    for (let i = 0; i < keyNum; i++) {
      let keyName;
      if (options.useIndexAsKey) {
        keyName = i;
      } else {
        keyName = Random.String(options.keyLength);
        while (tempObj[keyName]) {
          keyName = Random.String(options.keyLength);
        }
      }

      switch (itemType) {
        case 'custom':
          tempObj[keyName] = customItem;
          break;
        case 'customArray':
          tempObj[keyName] = customItem[i];
          break;

        default:
          let baseItem = getBaseItem(itemType);

          for (const item of itemContent) {
            tempObj[keyName] = generateItemContent(
              tempObj[keyName] || baseItem,
              Number(item[1]) || options.randomNumberLength,
              Number(item[1]) || options.randomStringLength,
              item,
              itemType,
              i
            );
          }
          break;
      }
    }
    return tempObj;
  }
  /**
   * Genreate a random array.
   * @param arrayLength length of the generated array.
   * @param itemContent an array that defines the content of each item.
   * @param itemType the type of the item.
   */
  export function Array(
    arrayLength = 10,
    itemType: IType = 'number',
    customItem?: any,
    itemContent: IRandomItem[] = [['ascending'], ['literal', '2'], ['randomNumber']],
    options = { keyLength: 6, randomStringLength: 10, randomNumberLength: 100000 }
  ) {
    let tempArr: any[] = [];
    for (let i = 0; i < arrayLength; i++) {
      switch (itemType) {
        case 'custom':
          tempArr[i] = customItem;
          break;
        case 'customArray':
          tempArr[i] = customItem[i];
          break;
        default:
          let baseItem = getBaseItem(itemType);

          for (const item of itemContent) {
            tempArr[i] = generateItemContent(
              tempArr[i] || baseItem,
              Number(item[1]) || options.randomNumberLength,
              Number(item[1]) || options.randomStringLength,
              item,
              itemType,
              i
            );
          }
          break;
      }
    }
    return tempArr;
  }
}
function getBaseItem(type: IType) {
  switch (type) {
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'array':
      return [];
    default:
      return undefined;
  }
}

function generateItemContent(
  baseItem: any,
  randomNumberLength: number,
  randomStringLength: number,
  item: IRandomItem,
  itemType: IType,
  index: number
) {
  switch (item[0]) {
    case 'randomNumber':
      return addBasedOnType(baseItem, Random.IntNumber(randomNumberLength), itemType);

    case 'randomString':
      return addBasedOnType(baseItem, Random.String(randomStringLength), itemType);

    case 'literal':
      return addBasedOnType(baseItem, item[1], itemType);

    case 'ascending':
      return addBasedOnType(baseItem, index + 1, itemType);

    default:
      return baseItem;
  }
}

function addBasedOnType(a: any, b: any, type: IType) {
  // Note if the itemType is = 'number' the items will be added and not concatenated.
  switch (type) {
    case 'string':
      return a + b;
    case 'array':
      a.push(b);
      return a;
    case 'number':
      if (Number(b)) {
        return a + Number(b);
      }
      return a;
  }
}
type IType = 'string' | 'number' | 'array' | 'custom' | 'customArray';
type IRandomItem = ['randomString' | 'literal' | 'randomNumber' | 'ascending', string?];
