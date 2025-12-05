import type { Category } from "@/types/category"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { Link } from "react-router"

type CategoryCardProps = {
    category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    const getCardClasses = (color: string | undefined) => {
        if (color === 'primary') {
            return 'bg-primary/10 border-primary'
        }
        return 'bg-secondary/10 border-secondary'
    }

    const getIconClasses = (color: string | undefined) => {
        if (color === 'primary') {
            return 'text-primary'
        }
        return 'text-secondary'
    }

    const getTextClasses = (color: string | undefined) => {
        if (color === 'primary') {
            return 'text-primary'
        }
        return 'text-secondary'
    }

    return (
        <Link
            className={`group col-span-1 flex flex-col justify-between p-6 border-2 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${getCardClasses(category.color)}`}
            to={`/quiz/${category.slug}`}
        >
            <div>
                <span className={`text-4xl ${getIconClasses(category.color)}`}>
                    {category.icon}
                </span>
                <h3 className="text-2xl font-bold text-[#171810] mt-3">
                    {category.title}
                </h3>
                <p className="text-gray-600 mt-2">
                    {category.description}
                </p>
            </div>
            <div className={`mt-6 flex items-center gap-2 font-bold ${getTextClasses(category.color)}`}>
                <span>Começar Agora</span>
                <ArrowRightIcon size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </Link>
    )
}

export default CategoryCard