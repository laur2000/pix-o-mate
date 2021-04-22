import {
  Column,
  PrimaryKey,
  Table,
  Max,
  NotNull,
  IsEmail,
  DataType,
  Model,
} from 'sequelize-typescript';

@Table
class Companies extends Model {
  @PrimaryKey
  @Column({ type: DataType.INTEGER})
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

export default Companies;
