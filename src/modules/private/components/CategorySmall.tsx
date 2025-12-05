import type { Category } from "@/types/category"
import { CaretRightIcon } from "@phosphor-icons/react"
import { Link } from "react-router"

type CategorySmallProps = {
    category: Category
}

const CategorySmall = ({ category }: CategorySmallProps) => {
    return (
        <Link
            className="flex items-center justify-between p-4 bg-white border border-gray-200/80 rounded-lg hover:bg-gray-50 transition-colors"
            to={`/quiz/${category.slug}`}
        >
            <span className="font-medium">
                {category.title}
            </span>
            <CaretRightIcon size={16} className="text-gray-400" />
        </Link>
    )
}

export default CategorySmall
