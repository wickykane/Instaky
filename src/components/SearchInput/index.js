import React, { useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../IconLink';
import Wrapper from '../Wrapper';
import ClickOutSide from '../ClickOutSide';
import DropdownContainer from '../DropDownContainer';


const _SearchInput = ({ className }) => {
  let searchRef = null;
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResult, setsearchResult] = useState([{}, {}, {}, {}, {} , {}, {}]);


  const focusSearchInput = () => {
    setIsFocusSearch(true);
    searchRef.focus();
  };

  const handleClickOutside = () => {
    setIsFocusSearch(false);
  };

  const clearSearchInput = () => {
    setSearchInputValue('');
    setsearchResult([]);
    focusSearchInput();
  };

  return (
    <Wrapper className={className}>
      <ClickOutSide callback={handleClickOutside}>
        <input
          className="search-input"
          value={searchInputValue}
          onChange={e => { setSearchInputValue(e.target.value)}}
          name="search"
          type="text"
          ref={e => (searchRef = e)}
          placeholder="Search"
        />
        <Icon icon="lnr lnr-magnifier search-icon" />
        <Icon onClick={clearSearchInput}  icon="lnr lnr-cross-circle close-icon" />
        {!isFocusSearch && (
          <Wrapper
            onClick={focusSearchInput}
            role="button"
            tabIndex="0"
            className="search-container d-flex justify-content-center"
          >
            <Icon icon="lnr lnr-magnifier search-icon-second" />
            <span>{searchInputValue || 'Search'}</span>
          </Wrapper>
        )}
        { isFocusSearch && searchResult.length > 0 && <DropdownContainer maxHeight="300px" items={searchResult}></DropdownContainer> }
      </ClickOutSide>
    </Wrapper>
  );
};

const SearchInput = styled(_SearchInput)`
  width: 215px;
  position: relative;
  height: 30px;
  margin: 0 auto;
  .search-input {
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    font-size: 14px;
    padding: 3px 10px 3px 26px;
    z-index: 2;
    width: 100%;
    height: 30px;
  }

  .search-icon {
    position: absolute;
    left: 0.45rem;
    top: 0.55rem;
    font-size: 14px;
    &-second {
      margin-right: 0.25rem;
    }
  }

  .close-icon {
    position: absolute;
    right: 0.45rem;
    top: 0.55rem;
    font-size: 14px;
  }

  .search-container {
    background: #fafafa;
    border: solid 1px #dbdbdb;
    justify-content: center;
    border-radius: 3px;
    color: #999;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    left: 0;
    padding: 7px;
    position: absolute;
    text-align: center;
    top: 0;
    z-index: 2;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
`;

export default SearchInput;
