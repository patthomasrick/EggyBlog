import Link from 'next/link';
import { Breadcrumb } from 'react-bootstrap';

export default function Breadcrumbs({ crumbs }) {
  // Set last crumb as active
  let last_crumb = crumbs[crumbs.length - 1];
  if (last_crumb) last_crumb.active = true;
  return (
    <>
      <Breadcrumb>
        {(crumbs ?? []).map((crumb, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${crumb.active ? 'active' : ''}`}
          >
            <Link href={crumb.url}>{crumb.label}</Link>
          </li>
        ))}
      </Breadcrumb>
    </>
  );
}
