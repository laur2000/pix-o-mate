import {
  Column,
  PrimaryKey,
  Table,
  Max,
  NotNull,
  IsEmail,
  DataType,
  Model,
  AutoIncrement,
} from 'sequelize-typescript';
import {
  CREATE_BEFORE_INSERT_CIF_TRIGGER,
  CREATE_BEFORE_UPDATE_CIF_TRIGGER,
  CREATE_CHECK_CIF_VALIDITY,
  DROP_BEFORE_INSERT_CIF_TRIGGER,
  DROP_BEFORE_UPDATE_CIF_TRIGGER,
  DROP_CHECK_CIF_VALIDITY,
} from 'src/models/Companies/sql';

export enum CompanyStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

@Table
class Companies extends Model<ICompany, Omit<ICompany, 'id'>> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  public id: number;

  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  public name: string;

  @NotNull
  @Column({ type: DataType.CHAR(9), unique: true, allowNull: false })
  public CIF: string;

  @NotNull
  @Max(100)
  @Column({ type: DataType.STRING(100), allowNull: false })
  public shortdesc: string;

  @NotNull
  @Column({ type: DataType.STRING(1000), allowNull: false })
  public description: string;

  @NotNull
  @Column({ type: DataType.STRING(100), allowNull: false })
  public address: string;

  @NotNull
  @IsEmail
  @Column({ type: DataType.STRING(100), allowNull: false })
  public email: string;

  @NotNull
  @Column({ type: DataType.CHAR(20), allowNull: false })
  public CCC: string;

  @NotNull
  @Column({ type: DataType.DATE, allowNull: false })
  public date: Date;

  @NotNull
  @Column({ type: DataType.ENUM(...Object.values(CompanyStatus)), allowNull: false })
  public status: CompanyStatus;

  @NotNull
  @Column({ type: DataType.STRING(2048), allowNull: false })
  public logo: string;
}

export interface ICompany {
  id: number;
  name: string;
  CIF: string;
  shortdesc: string;
  description: string;
  address: string;
  email: string;
  CCC: string;
  date: Date;
  status: CompanyStatus;
  logo: string;
}

export default Companies;

export const check_cif_validity_trigger = [
  DROP_CHECK_CIF_VALIDITY,
  CREATE_CHECK_CIF_VALIDITY,
  DROP_BEFORE_INSERT_CIF_TRIGGER,
  CREATE_BEFORE_INSERT_CIF_TRIGGER,
  DROP_BEFORE_UPDATE_CIF_TRIGGER,
  CREATE_BEFORE_UPDATE_CIF_TRIGGER,
];
