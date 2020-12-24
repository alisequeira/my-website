export default function Project({ name, description, image, link, id }) {
    return (
        <div key={id} className="">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={image} alt=" Project image" className="w-full lg:rounded-lg" />
                <div className="px-6 py-4 lg:rounded-lg">
                    <div className="font-Poppins-bold text-blue-light text-xl mb-2">{name}</div>
                    <p className="text-text-black font-Lato-bold">
                        {description}
                    </p>
                    <a href={link} target="_blank" className="font-Poppins text-blue-dark hover:text-blue-lightest">Source Code - </a>
                </div>
            </div>
        </div>
    )
}