const TextField = ({ input, label, type, currentValue, className, styleTextError, name, meta: { touched, error } }: any) => {
	if (currentValue !== undefined) {
		return (
			<div>
				<input {...input} disabled={true}  placeholder={label} type={type} name={name} className={className} />
				<p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
			</div>
		);
	} else {
		return (
			<div>
				<input {...input} placeholder={label} type={type} name={name} className={className} />
				<p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
			</div>
		);
	}
};

export default TextField;
