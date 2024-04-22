import { ButtonProps } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { CSSProperties, ReactNode } from 'react';
import { IAnyObject, IEntityReferenceDto } from '@/interfaces';
import { IConfigurableColumnsProps } from '@/providers/datatableColumnsConfigurator/models';
import { FormIdentifier } from '@/providers/form/models';
import { ITableViewProps } from '@/providers/tableViewSelectorConfigurator/models';

interface IWrappedEntityPickerProps {
  entityType?: string;
  filters?: ITableViewProps[];
  allowNewRecord?: boolean;
  onDblClick?: (data: any) => void;
}

export interface ISelectedProps {
  id?: string;
  displayName?: string;
}

export interface IAddNewRecordProps {
  modalFormId?: FormIdentifier;
  modalTitle?: string;
  showModalFooter?: boolean;
  footerButtons?: 'default' | 'custom' | 'none';
  submitHttpVerb?: 'POST' | 'PUT';
  onSuccessRedirectUrl?: string;
  modalWidth?: number | string;
  buttons?: []
}

export type IncomeValueFunc = (value: any, args: any) => string;
export type OutcomeValueFunc = (value: any, args: any) => string | string[] | IEntityReferenceDto | IEntityReferenceDto[] | any;

export interface IEntityPickerState {
  showModal?: boolean;
  selectedRowIndex?: number;
  // selectedValue?: string;
  selectedRow?: IAnyObject;
  globalStateKey?: string;
}

export interface IEntityPickerProps extends Omit<IWrappedEntityPickerProps, 'onDblClick'> {
  formId?: FormIdentifier;

  onChange?: (value: string | string[] | IEntityReferenceDto | IEntityReferenceDto[], data: IAnyObject) => void;
  onSelect?: (data: IAnyObject) => void;
  value?: string | string[] | IEntityReferenceDto | IEntityReferenceDto[] | any;
  displayEntityKey?: string;
  width?: number | string;
  disabled?: boolean;
  loading?: boolean;
  name?: string;
  mode?: 'single' | 'multiple' | 'tags';
  size?: SizeType;
  title?: string;
  useButtonPicker?: boolean;
  pickerButtonProps?: ButtonProps;
  defaultValue?: string;
  entityFooter?: ReactNode;
  configurableColumns?: IConfigurableColumnsProps[]; // Type it later
  addNewRecordsProps?: IAddNewRecordProps;
  style?: CSSProperties;
  readOnly?: boolean;
  placeholder: string;
  incomeValueFunc: IncomeValueFunc;
  outcomeValueFunc: OutcomeValueFunc;
}
