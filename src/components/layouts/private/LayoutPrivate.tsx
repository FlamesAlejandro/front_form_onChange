
type TLayoutPrivate = {
    children: JSX.Element
}

const LayoutPrivate = ({ children }: TLayoutPrivate) => {
    return <>{children}</>
}

export default LayoutPrivate;
