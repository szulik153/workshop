export interface Message {
  message: string;
}

export interface BaselineDto {
  id: string;
  actualPartNumber: string;
  targetPartNumber: string;
  createdAt: string;
}

export type BaselineSaveDto = Omit<BaselineDto, 'id' | 'createdAt'>;

export interface EcuDto {
  id: string;
  actualEcuId: string;
  targetEcuId: string;
  createdAt: string;
}

export type EcuSaveDto = Omit<EcuDto, 'id' | 'createdAt'>;
