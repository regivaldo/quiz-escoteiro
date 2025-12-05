type SubmitProps = {
    label: string
}

const Submit = ({ label }: SubmitProps) => {
    return (
        <button
            className="flex w-full items-center justify-center rounded-md bg-primary py-3 text-base font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-surface-dark cursor-pointer"
            type="submit"
        >
            {label}
        </button>
    )
}

export default Submit