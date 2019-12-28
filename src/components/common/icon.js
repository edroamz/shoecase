import React from 'react';
import { ReactComponent as SvgMenu } from '../../icons/menu.svg';
import { ReactComponent as SvgClose } from '../../icons/close.svg';
import { ReactComponent as SvgUser } from '../../icons/user.svg';
import { ReactComponent as SvgShoppingBag } from '../../icons/shopping-bag.svg';
import { ReactComponent as SvgMagnifier } from '../../icons/magnifier.svg';

const Icon = ({ type, classes = 'h-4 w-4' }) => {
  const icons = {
    close: () => <SvgClose className={classes}></SvgClose>,
    menu: () => <SvgMenu className={classes}></SvgMenu>,
    user: () => <SvgUser className={classes}></SvgUser>,
    shoppingBag: () => <SvgShoppingBag className={classes}></SvgShoppingBag>,
    magnifier: () => <SvgMagnifier className={classes}></SvgMagnifier>,
    default: () => null
  };
  return (icons[type] || icons['default'])();
};

export default Icon;
