
type SignInFormProps = {
  email: string;
  password:string;
}

type SignUpFormProps = {
  fullName:string;
  userName:string;
  email:string;
  password:string;
}

type ItemProps = {
  id:number;
  title:string;
}

type  TaskProps = {
  id:number;
  title:string;
  items: Array<ItemProps>;
}
