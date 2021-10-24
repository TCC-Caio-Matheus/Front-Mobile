import { Dimensions, Platform } from 'react-native';

/**
 * Retonar se o dispositivo é um iphone X ou não
 */
export const isIphoneX = (): boolean => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
};

/**
 * Determina qual estilo utilizar para os dispositivos
 * @param {any} iphoneXStyle Estilo para determinar se for iPhone X
 * @param {any} regularStyle Estilo para os demais dispositivos
 */
export const ifIphoneX = (
  iphoneXStyle: number,
  regularStyle: number,
): number => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

/**
 * Retorna o tamanho do status bar
 * @param {boolean} safe Determina se a precisa de uma margem de segurança
 */
export const getStatusBarHeight = (): number => {
  return Platform.select({
    ios: ifIphoneX(isIphoneX() ? 44 : 30, 20),
    android: 20,
    default: 0,
  });
};

/**
 * Retorna 34px se for iPhone X, caso contrario, retorna 0
 */
export const getBottomSpace = (): number => {
  return isIphoneX() ? 34 : 0;
};
