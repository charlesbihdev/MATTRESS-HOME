const { default: Image } = require('next/image')

const ApplicationLogo = props => (
    <Image
        alt="wsports logo"
        width={250}
        height={90}
        src="/wsports.jpg"
        {...props}
    />
)

export default ApplicationLogo
