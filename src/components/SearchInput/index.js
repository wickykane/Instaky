import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../IconLink';

const _SearchInput = ({ className }) => {
  let searchRef = null;
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const FocusSearchInput = () => {
    setIsFocusSearch(true);
    searchRef.focus();
  };

  return (
    <div className={className}>
      <input
        className="search-input"
        onBlur={() => setIsFocusSearch(false)}
        onChange={e => setSearchInputValue(e.target.value)}
        name="search"
        type="text"
        ref={e => (searchRef = e)}
        placeholder="Tìm kiếm"
      />
      <Icon icon="lnr lnr-magnifier search-icon" />
      <Icon icon="lnr lnr-cross-circle close-icon" />
      {!isFocusSearch ? (
        <div
          onClick={() => FocusSearchInput()}
          role="button"
          tabIndex="0"
          className="search-container d-flex justify-content-center"
        >
          <Icon icon="lnr lnr-magnifier search-icon-second" />
          <span>{searchInputValue || 'Tìm kiếm'}</span>
        </div>
      ) : null}
    </div>
  );
};

const SearchInput = styled(_SearchInput)`
  width: 215px;
  position: relative;
  height: 30px;
  .search-input {
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    font-size: 14px;
    padding: 3px 10px 3px 26px;
    z-index: 2;
    width: 100%;
    height: 100%;
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
