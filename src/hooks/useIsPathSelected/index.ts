import { useMemo } from 'react';
import { useLocation, useResolvedPath } from 'react-router-dom';
import { isEqual } from '~/services/utils/lodash';

const useIsPathSelected = (path: string) => {
  const { pathname } = useResolvedPath(path);
  const { pathname: locationPathname } = useLocation();

  const isSelected = useMemo(
    () => isEqual(pathname, locationPathname),
    [pathname, locationPathname],
  );

  return isSelected;
};

export default useIsPathSelected;
