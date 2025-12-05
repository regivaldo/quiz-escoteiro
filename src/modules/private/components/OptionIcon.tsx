import { CheckIcon, XIcon } from "@phosphor-icons/react"

type OptionIconProps = {
    state: string
    id: string
}

const OptionIcon = ({ state, id }: OptionIconProps) => {
    if (state === 'incorrect') {
        return (
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-error text-white">
                <XIcon size={16} />
            </div>
        )
    }
    if (state === 'correct') {
        return (
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <CheckIcon size={16} />
            </div>
        )
    }
    return (
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black/10">
            <span className="text-sm font-bold">{id}</span>
        </div>
    )
}

export default OptionIcon