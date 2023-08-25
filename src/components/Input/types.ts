export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon: React.ReactNode;
  name: "email" | "password";
  control: any;
  errorMessage?: string;
}
