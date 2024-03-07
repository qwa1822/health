

export enum SelectedPage{
  Home="home",
  Benefits="benefits",
  OurClasses='ourclasses',
  ContactUs="contactus"
}

export interface benefitType{
  icon:JSX.Element;
  title:string;
  description:string;
  setSelectedPage?:(value:SelectedPage)=>void
}

export interface classType{
  name:string;
  description?:string;
  image:string;
}