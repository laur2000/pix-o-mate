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

import { readFileSync } from 'fs';

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
  @Column({ type: DataType.STRING(9), unique: true, allowNull: false })
  public CIF: string;

  @NotNull
  @Max(100)
  @Column({ type: DataType.STRING(100), allowNull: false })
  public shortdesc: string;

  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  public description: string;

  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  public address: string;

  @NotNull
  @IsEmail
  @Column({ type: DataType.TEXT, allowNull: false })
  public email: string;

  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  public CCC: string;

  @NotNull
  @Column({ type: DataType.DATE, allowNull: false })
  public date: Date;

  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  public status: CompanyStatus;

  @NotNull
  @Column({ type: DataType.TEXT, allowNull: false })
  public logo: string;
}

export enum CompanyStatus {
  Open = 'Open',
  Closed = 'Closed',
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

export const companyTriggers = readFileSync('src/models/Companies/triggers.sql').toString();
