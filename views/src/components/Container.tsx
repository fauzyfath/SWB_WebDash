type containerProps = {
    className?: string;
    id?: string;
    type?: 'deviceContainer'| 'infoContainer' | 'menuContainer' | 'formContainer';
    children?: React.ReactNode;
};

const Container = ({className,type, id, children}:containerProps) => {
  return (
    <div
    id={id?.toString()}
    className={`container ${type ? `container-${type}`: ""} ${className}`}
    >
    {children}
    </div>
  )
}

export default Container