import { IConfigurableFormComponent } from '@/providers/form/models';
import { IButtonGroupItem, IButtonItem } from '@/providers';

export type RefListGroupItemProps = IRefListItemFormModel | IRefListItemGroup;

export interface IRefListGroupItemBase extends IButtonItem{
  referenceList?: any;
  item?: string;
}

export interface IRefListItemFormModel extends IRefListGroupItemBase {
}

export interface IRefListItemGroup extends IRefListGroupItemBase {
  childItems?: RefListGroupItemProps[];
}

export interface IKanbanButton extends IButtonGroupItem {
  itemValue: number;
  item: string;
}
export interface IKanbanProps extends IConfigurableFormComponent {
  items?: IKanbanButton[];
  referenceList?: any;
  fontColor?: string;
  showIcons?: boolean;
  width?: number;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
  fontSize?: number;
  entityType?: { id: string; name: string };
  allowNewRecord?: boolean;
  readonly?: boolean;
  collapsible?: boolean;
  gap?: number;
  headerStyle?: any;
  columnStyle?: any;
  groupingProperty?: string;
  modalFormId?: string;
  createFormId?: string;
  headerBackgroundColor: string;
  actionConfiguration: any;
}
