const { default: Image } = require('next/image')

const ApplicationLogo = props => (
    <Image
        alt="mattess Home logo"
        loading="lazy"
        width={250}
        height={90}
        src="/wsports.jpg"
        {...props}
    />
)

export default ApplicationLogo
