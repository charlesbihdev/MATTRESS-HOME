const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`transition ease-in-out duration-150 ${className}`}
        {...props}
    />
)

export default Button
