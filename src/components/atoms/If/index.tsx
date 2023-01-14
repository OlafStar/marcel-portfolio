type IfProperties = {
    condition: boolean | unknown;
    children: React.ReactNode;
};

export const If: React.FC<IfProperties> = ({condition, children}) => {
    return condition ? <>{children}</> : null;
};
