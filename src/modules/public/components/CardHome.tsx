type CardHomeProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    type?: 'primary' | 'secondary'
}

const CardHome = ({ title, description, icon, type = 'primary' }: CardHomeProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-bg-light p-8 text-center">
            <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-${type}/10 text-${type}`}>
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    )
}

export default CardHome