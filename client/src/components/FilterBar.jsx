import React, { useState } from 'react';
import SortDropdown from './common/SortDropdown';
import ItemsPerPageDropdown from './common/ItemsPerPageDropdown';
import ViewToggle from './common/ViewToggle';
import FilterButton from './common/FilterButton';
const FilterBar = () => {
    return (
        <>
        <FilterButton/>
        <Toolbar/>
        </>
    );
};




const Toolbar = () => {
    const [sortOption, setSortOption] = useState('latest');
    const [itemsPerPage, setItemsPerPage] = useState('12');
    const [view, setView] = useState('grid');
  
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SortDropdown sortOption={sortOption} onChange={(e) => setSortOption(e.target.value)} />
        <ItemsPerPageDropdown itemsPerPage={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)} />
        <ViewToggle view={view} onToggle={setView} />
      </div>
    );
  };

export default FilterBar;

