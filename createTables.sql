CREATE TABLE ProgramInfo(
  Name varchar(255) NOT NULL,
  Description varchar(2047),
  Updated date NOT NULL,
  IACM varchar(255),
  SETA varchar(255),
  Evaluator varchar(255),
  CSRP smallint,
  Type varchar(255),
  FormFactor varchar(255),
  ClassData varchar(255),
  ClassHard varchar(255),
  ClassSoft varchar(255),
  Nomenclature varchar(255),
  Algorithms varchar(255),
  KeyManagement varchar(255),
  CertNeed date,
  Office varchar(255),
  Manager varchar(255),
  Vendor varchar(255),
  Issues varchar(2047),
  CONSTRAINT PK_Name PRIMARY KEY (Name)
);

CREATE TABLE MilestoneInfo(
  Milestone varchar(31) NOT NULL,
  MileStatus varchar(31),
  Completed date,
  CONSTRAINT PK_Milestone PRIMARY KEY (Milestone)
);

CREATE TABLE CertReqStatus(
  DocName varchar(63) NOT NULL,
  XDRLNum smallint,
  DocNum varchar(7),
  Vendor varchar(255),
  Received date,
  Approved date,
  MilestoneLink varchar(255),
  DocStatus varchar(63),
  Comments varchar(2047),
  CONSTRAINT PK_DocName PRIMARY KEY (DocName)
);
