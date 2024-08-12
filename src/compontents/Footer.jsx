import { SOCIAL_MEDIA_LINKS } from "../constants"

const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, i) => (
                    <a 
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="nooperner noreferrer"
                    >
                        { link.icon }
                    </a>
                ))}
            </div>
            <p className="mt-8 text-center tracking-tighter text-neutral-500">
                &copy; El Obrero. Todos los derechos reservados.
            </p>
        </div>
    )
}

export default Footer
