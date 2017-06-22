import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';


export default () => {
  return (
    <div>
      <PrivateHeader title="Short Lnk"/>
      <div className="page-content">
        <LinksListFilters/>
        <AddLink/>
        <LinksList/>
      </div>
    </div>
  );
};





























 //
