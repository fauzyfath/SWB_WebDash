import LogoutIcon from "../assets/logout-icon.svg"

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "danger";
    className?: string;
    id?: string | number
    onClick?: () => void;
    children?: React.ReactNode
    isLogout?: boolean;
}

const Button = ({type, variant, className, id, onClick, children, isLogout}:ButtonProps ) => {
  return (
    <button
    id = {id?.toString()}
    type = {type}
    className= {`btn ${variant ? `btn-${variant}`: ""} ${className}`}
    onClick={onClick}
    >
    {isLogout && <img className="w-6" src={LogoutIcon} alt="" />
}
    {children}
    </button>
  )
}

export default Button