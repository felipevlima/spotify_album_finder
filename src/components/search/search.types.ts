export interface SearchProps {
  responseData: (data?: any) => void;
}

export interface FormDataType {
  search: string;
}

interface ItemsTypes {
  items: Array<{}>;
}

export interface ApiGetType {
  albums: ItemsTypes;
}
