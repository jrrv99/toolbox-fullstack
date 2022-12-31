import { useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { Routes } from '../routes/Routes';

const BreadCrumb = () => {
  const location = useLocation();
  const locs = location.pathname.split('/');
  return (
    <Breadcrumb className="p-3">
      {locs.map((loc, index) => {
        if (loc !== '')
          return (
            <BreadcrumbItem
              href={locs.slice(0, index + 1).join('/')}
              key={`loc_${index}`}
              active={locs.length === index + 1}
            >
              {loc}
            </BreadcrumbItem>
          );
        return (
          <BreadcrumbItem
            href={Routes.HOME}
            key={`loc_${index}`}
            active={locs.length === index + 1}
          >
            Home
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
export default BreadCrumb;

