const Textarea = ({ input,widthTextArea, heightTextArea, label, type, className, counterWord, styleTextError, meta: { touched, error } }: any) => {
  
  if(counterWord !== undefined){
    counterWord(input.value.length)
  }
  
  return (
    <div>
      <textarea maxLength="280" {...input} rows={heightTextArea} cols={widthTextArea} placeholder={label} type={type} className={className} />
      <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
    </div>
  )
}

export default Textarea
