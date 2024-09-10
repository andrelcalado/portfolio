export interface ALButtonTypes {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface ContactCardTypes {
  className?: string;
  logo: string;
  type: string;
  label: string;
  href?: string;
}

export interface ModalVideoTypes {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  video: string;
}