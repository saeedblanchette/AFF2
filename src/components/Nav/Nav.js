import { useEffect, useRef, useState, useCallback, Fragment } from 'react';
import Link from 'next/link';

// import useSite from 'hooks/use-site';
import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
import { postPathBySlug } from 'lib/posts';
// import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
// import NavListItem from 'components/NavListItem';
import { Dialog, Transition } from '@headlessui/react';
import navigationData from './NavigationData';
const SEARCH_VISIBLE = 'visible';
const SEARCH_HIDDEN = 'hidden';
const NavSubItem = ({ item }) => {
  if (item.children && item.children.length > 0) {
    return (
      <li tabIndex="0" className="">
        <span className="hover:bg-yellow-200 hover:text-gray-800">
          <Link href={item.url}>
            <a>
              {item.title} <MdArrowForwardIos className="inline" />
            </a>
          </Link>
        </span>
        <ul className="rounded-box bg-amber-50 p-2  text-gary-800  z-20 border-2 border-l-none">
          {item.children.map((nav, i) => (
            <li key={i}>
              <Link href={nav.url}>
                <a> {nav.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li>
      <Link href={item.url}>
        <a>{item.title} </a>
      </Link>
    </li>
  );
};
const NavItem = ({ item }) => {
  if (item.children && item.children.length > 0) {
    return (
      <li tabIndex="0">
        <span className="hover:bg-yellow-300 hover:text-gray-800 uppercase">
          <Link href={item.url}>
            <a>{item.title} </a>
          </Link>
        </span>
        <ul className=" menu rounded-box bg-amber-50 p-2  text-gary-800  z-20 uppercase">
          {item.children.map((nav, i) => (
            <NavSubItem key={i} item={nav} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className="hover:bg-yellow-300 hover:text-gray-800 focus:bg-yellow-800 uppercase">
      <Link href={item.url}>
        <a> {item.title}</a>
      </Link>
    </li>
  );
};
const Nav = () => {
  const formRef = useRef();
  let [isOpen, setIsOpen] = useState(false);

  const [searchVisibility, setSearchVisibility] = useState(SEARCH_HIDDEN);

  // const { metadata = {}, menus } = useSite();
  // const { title } = metadata;

  // const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  // const navigation = findMenuByLocation(menus, navigationLocation);

  const { query, results, search, clearSearch, state } = useSearch({
    maxResults: 5,
  });

  const searchIsLoaded = state === SEARCH_STATE_LOADED;

  // When the search visibility changes, we want to add an event listener that allows us to
  // detect when someone clicks outside of the search box, allowing us to close the results
  // when focus is drawn away from search

  useEffect(() => {
    // If we don't have a query, don't need to bother adding an event listener
    // but run the cleanup in case the previous state instance exists

    if (searchVisibility === SEARCH_HIDDEN) {
      removeDocumentOnClick();
      return;
    }

    addDocumentOnClick();
    addResultsRoving();

    // When the search box opens up, additionall find the search input and focus
    // on the element so someone can start typing right away

    const searchInput = Array.from(formRef.current.elements).find((input) => input.type === 'search');

    searchInput.focus();

    return () => {
      removeResultsRoving();
      removeDocumentOnClick();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVisibility]);

  /**
   * addDocumentOnClick
   */

  function addDocumentOnClick() {
    document.body.addEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * removeDocumentOnClick
   */

  function removeDocumentOnClick() {
    document.body.removeEventListener('click', handleOnDocumentClick, true);
  }

  /**
   * handleOnDocumentClick
   */

  function handleOnDocumentClick(e) {
    if (!e.composedPath().includes(formRef.current)) {
      setSearchVisibility(SEARCH_HIDDEN);
      clearSearch();
    }
  }

  /**
   * handleOnSearch
   */

  function handleOnSearch({ currentTarget }) {
    search({
      query: currentTarget.value,
    });
  }

  /**
   * handleOnToggleSearch
   */

  function handleOnToggleSearch() {
    setSearchVisibility(SEARCH_VISIBLE);
    setIsOpen((prev) => !prev);
  }

  /**
   * addResultsRoving
   */

  function addResultsRoving() {
    document.body.addEventListener('keydown', handleResultsRoving);
  }

  /**
   * removeResultsRoving
   */

  function removeResultsRoving() {
    document.body.removeEventListener('keydown', handleResultsRoving);
  }

  /**
   * handleResultsRoving
   */

  function handleResultsRoving(e) {
    const focusElement = document.activeElement;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusElement.nodeName === 'INPUT' && focusElement.nextSibling.children[0].nodeName !== 'P') {
        focusElement.nextSibling.children[0].firstChild.firstChild.focus();
      } else if (focusElement.parentElement.nextSibling) {
        focusElement.parentElement.nextSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.firstChild.firstChild.focus();
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusElement.nodeName === 'A' && focusElement.parentElement.previousSibling) {
        focusElement.parentElement.previousSibling.firstChild.focus();
      } else {
        focusElement.parentElement.parentElement.lastChild.firstChild.focus();
      }
    }
  }

  /**
   * escFunction
   */

  // pressing esc while search is focused will close it

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      clearSearch();
      setSearchVisibility(SEARCH_HIDDEN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  // function openModal() {
  //   setIsOpen(true);
  // }
  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="flex  container  px-6 lg:px-16 mx-auto  mx-auto border-b-2">
      <div className="m-auto p-2">
        <img src="/logoAFF.svg" width="150" alt="ds" className="m-auto" />
      </div>
      <div className="basis-9/12 justify-between m-auto">
        {/* <p className={styles.navName}>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </p> */}
        {/* <ul className={styles.navMenu}>
          {navigation?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul> */}
        <ul className="menu menu-horizontal bg-base-100 rounded-box p-2 w-full justify-start font-semibold items-center">
          <li className="hover:bg-yellow-300 hover:text-gray-800 focus:bg-yellow-800">
            <Link href="/">
              <a>
                <AiFillHome className="text-2xl" />
              </a>
            </Link>
          </li>
          {navigationData.map((item, i) => (
            <NavItem item={item} key={i} />
          ))}
        </ul>
      </div>
      <div className="flex  text-md  justify-center items-center m-auto ">
        <span className="mx-4 relative">
          {searchVisibility === SEARCH_HIDDEN && (
            <button
              onClick={handleOnToggleSearch}
              disabled={!searchIsLoaded}
              htmlFor="my-modal-3"
              className="modal-button"
            >
              <span className="sr-only">Toggle Search</span>
              <GoSearch className="text-2xl font-bold " />
            </button>
          )}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all bg-amber-50">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Search
                      </Dialog.Title>
                      <div className="my-3 w-full">
                        <input
                          type="search"
                          name="q"
                          value={query || ''}
                          onChange={handleOnSearch}
                          autoComplete="off"
                          placeholder="Search..."
                          required
                          className="input input-bordered input-md w-full max-w-xs border-yellow-800 w-full"
                        />
                      </div>
                      <div className="mt-2">
                        <div className="   w-full   rounded-box  w-full   items-center font-bold   ">
                          {results.length > 0 && (
                            <ul>
                              {results.map(({ slug, title }, index) => {
                                return (
                                  <li key={slug} className="text-">
                                    <Link tabIndex={index} href={postPathBySlug(slug)}>
                                      <a className="text-lg my-1 hover:bg-yellow-200 hover:text-gray-800 p-1 my-1 w-full">
                                        {title}
                                      </a>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {results.length === 0 && (
                            <p>
                              Sorry, not finding anything for <strong>{query}</strong>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div> */}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {searchVisibility === SEARCH_VISIBLE && (
            <form ref={formRef} action="/search" data-search-is-active={!!query}>
              <input
                type="search"
                name="q"
                value={query || ''}
                onChange={handleOnSearch}
                autoComplete="off"
                placeholder="Search..."
                required
                className="input input-bordered input-sm w-full max-w-xs border-yellow-800"
              />
            </form>
          )}
        </span>
        <span className="m-1 p-1 font-bold underline decoration-yellow-600">ENG</span>
        <span className="m-1 p-1 font-bold">FR</span>
      </div>
    </nav>
  );
};

export default Nav;
