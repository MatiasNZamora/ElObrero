
const DishCard = ({ proyect }) => {
    return (
        <div>
            <img 
                src={proyect.image}
                alt={proyect.title}
                className="rounded-3xl p-2 h-[300px] w-[300px] opacity-60"
            />
            <div className="p-4">
                <h3 className="mb-2 text-2xl font-bold tracking-tighter">
                    {proyect.title}
                </h3>
                <p className="text-sm">
                    {proyect.description}
                </p>
            </div>
        </div>
    )
};

export default DishCard