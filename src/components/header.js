import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './common/icon';
import Button from './common/button';
import SearchBox from './common/searchBox';
import ShoppingBag from './shoppingBag';
import Notice from './notice';
import { breakpoints, navLinks } from '../config.json';

const Header = ({
  isMenuOpen,
  handleMenuClick,
  isShoppingBagOpen,
  handleShoppingBagClick,
  viewportSize
}) => {
  const [isNoticeShowing, setIsNoticeShowing] = useState(true);

  const navClassName = 'w-full border-t border-b border-gray-300';
  const searchClassName = 'h-12 px-4 py-2';

  function handleNoticeClose() {
    setIsNoticeShowing(false);
  }

  function renderHeader() {
    return (
      <>
        {isNoticeShowing && (
          <Notice text='Free shipping worldwide!' hide={isMenuOpen}>
            <button onClick={handleNoticeClose}>
              <Icon
                type='close'
                className='absolute w-3 h-3 right-0 top-0'
              ></Icon>
            </button>
          </Notice>
        )}

        {/* Small devices */}
        <section className='relative bg-white w-full bg-white z-30 md:hidden border-b border-gray-300'>
          <article className='flex items-center w-full h-12 px-4 py-2 '>
            <div className='flex flex-wrap  items-center justify-between w-full '>
              <Button onClick={handleMenuClick}>
                {isMenuOpen ? (
                  <Icon type='close'></Icon>
                ) : (
                  <Icon type='menu'></Icon>
                )}
              </Button>
              <Link
                to='/'
                className='font-bold uppercase text-center tracking-wider'
              >
                shoecase
              </Link>
              <div className='flex flex-wrap justify-between w-20'>
                <Button>
                  <Icon type='user'></Icon>
                </Button>
                <Link
                  to='/cart'
                  className='active:shadow-outline focus:outline-none focus:shadow-outline p-2'
                >
                  <Icon type='shoppingBag'></Icon>
                  <span className='absolute top-0 rounded-full bg-gray-900 text-white w-4 h-4 border-1 border-white ml-4 mt-2 text-xxs text-center'>
                    0
                  </span>
                </Link>
              </div>
            </div>
          </article>
          <nav
            className={
              isMenuOpen
                ? `${navClassName} visible`
                : `${navClassName} h-0 invisible`
            }
          >
            <ul className='w-full h-full px-4'>
              {navLinks &&
                navLinks.map(link => (
                  <li
                    key={link.label}
                    className='flex flex-wrap items-center w-full h-16 border-b border-gray-300'
                  >
                    <NavLink to={link.url} className='w-full py-4 uppercase'>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
          <article
            className={
              isMenuOpen ? `${searchClassName} hidden` : searchClassName
            }
          >
            <div className='flex flex-wrap items-center justify-between w-full'>
              <SearchBox placeholder='Products...'>
                <Icon type='magnifier' className='h-4 w-4 absolute'></Icon>
              </SearchBox>
            </div>
          </article>
        </section>

        {/* Medium+ devices */}
        <section className='relative bg-white w-full hidden md:flex md:flex-1 md:px-6 lg:px-12 border-b border-gray-300 z-30'>
          <article className='flex flex-wrap items-center w-1/2 '>
            <Link
              to='/'
              className='font-bold uppercase text-xl mr-20 tracking-wider'
            >
              shoecase
            </Link>
            <nav>
              <ul className='flex flex-wrap items-stretch w-40 '>
                {navLinks &&
                  navLinks.map(link => (
                    <li
                      key={link.label}
                      className='flex flex-wrap items-center h-full mr-4'
                    >
                      <NavLink
                        to={link.url}
                        exact
                        className='uppercase py-4 lg:py-6 font-medium text-sm text-gray-800 tracking-wider px-2 border-b-2 border-transparent hover:border-gray-400 '
                        activeClassName='border-b-2 border-black'
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </nav>
          </article>
          <article className='flex flex-wrap items-center justify-end w-1/2'>
            <SearchBox placeholder='Products...'>
              <Icon type='magnifier' className='h-4 w-4 absolute'></Icon>
            </SearchBox>
            <div className='flex flex-wrap justify-between w-20'>
              <Button>
                <Icon type='user'></Icon>
              </Button>
              <Button onClick={handleShoppingBagClick}>
                <Icon type='shoppingBag'></Icon>
                <span className='absolute top-0 rounded-full bg-gray-900 text-white w-5 h-5 border-2 border-white ml-1 -mt-1 text-xxs text-center'>
                  0
                </span>
              </Button>
            </div>
          </article>
        </section>
      </>
    );
  }

  return (
    <>
      <header>{renderHeader()}</header>

      {isShoppingBagOpen && viewportSize.width > breakpoints.md && (
        <ShoppingBag onClick={handleShoppingBagClick}></ShoppingBag>
      )}
    </>
  );
};

export default Header;
