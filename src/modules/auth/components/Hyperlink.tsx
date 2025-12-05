import { Link } from "react-router"

type HyperlinkProps = {
    label: string
    to: string
}

const Hyperlink = ({ label, to }: HyperlinkProps) => {
    return (
        <Link className="text-secondary hover:underline" to={to}>
            {label}
        </Link>
    )
}

export default Hyperlink