type RoutesType = {
  path: string;
  name: string;
  icon: React.ReactNode;
};

export interface RoutesInterfaces {
  path: string;
  name: string;
  icon: React.ReactNode;
  submenu: RoutesType[];
}
