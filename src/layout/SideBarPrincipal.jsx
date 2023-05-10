import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import SideBarAdmin from './SideBarAdmin';
import SidebarCandidat from './SideBarCandidat';
import SidebarEntreprise from './SidebarEntreprise';
function SideBarPrincipal() {
  const { role } = useContext(AuthContext);
  return (
    <div>
      {role === 'Admin' ? (
        <SideBarAdmin />
      ) : role === 'Company' ? (
        <SidebarEntreprise />
      ) : (
        <SidebarCandidat />
      )}
    </div>
  );
}
export default SideBarPrincipal;
